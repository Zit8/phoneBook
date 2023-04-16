import express from 'express';
import { Company } from '../../../db/models';

const apiCompanyRouter = express.Router();

apiCompanyRouter.post('/addcompany', async (req, res) => {
  const {
    companyName, telNum,
  } = req.body;
  if (!companyName && !telNum) return res.sendStatus(403);
  try {
    const newCompany = await Company.create({
      companyName, telNum, userId: req.session.user.id,
    });
    return res.json(newCompany);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

apiCompanyRouter.patch('/edit/:id', async (req, res) => {
  try {
    await Company.update({ telNum: req.body.newCompanyTel }, { where: { id: req.params.id } });
    console.log(req.body.newCompanyTel);
    const editCompanyTel = await Company.findByPk(req.params.id);
    res.json(editCompanyTel);
  } catch (err) {
    res.sendStatus(500);
  }
});

apiCompanyRouter.delete('/:id', async (req, res) => {
  try {
    await Company.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
export default apiCompanyRouter;
