import express from 'express';
import { Company } from '../../../db/models';
import checkAuthorisation from './middlewares/checkAuthorization';
import noAuthorisationCheck from './middlewares/noAuthorisationCheck';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  try {
    const allCompany = await Company.findAll({ order: [['companyName', 'ASC']] });
    const initState = { allCompany };
    res.render('Layout', initState);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
indexRouter.get('/auth/signup', noAuthorisationCheck, (req, res) => {
  res.render('Layout', {});
});
indexRouter.get('/auth/signin', noAuthorisationCheck, (req, res) => {
  res.render('Layout', {});
});
indexRouter.get('/addcompany', checkAuthorisation, (req, res) => {
  res.render('Layout', {});
});
indexRouter.get('/handbook', checkAuthorisation, async (req, res) => {
  try {
    const usersHandbooks = await Company.findAll({ where: { userId: req.session.user.id }, order: [['companyName', 'ASC']] });
    // console.log(req.session.user.id, '<=========================================');
    // console.log(usersHandbooks);
    const initState = { usersHandbooks };
    res.render('Layout', initState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default indexRouter;
