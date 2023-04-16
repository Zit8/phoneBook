import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/signup', async (req, res) => {
  const {
    name, email, password,
  } = req.body;
  if (!name && !email && !password) res.sendStatus(403);

  try {
    const hashPass = await bcrypt.hash(password, 10);
    const [user, create] = await User.findOrCreate({
      where: { email },
      defaults: {
        password: hashPass,
        name,
      },

    });
    if (!create) res.sendStatus(403);
    req.session.user = { id: user.id };
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(403);
  }
});

apiAuthRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) return res.sendStatus(403);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(403);
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = { id: user.id, role: user.role };
      return res.sendStatus(200);
    }
    return res.sendStatus(403);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

apiAuthRouter.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default apiAuthRouter;
