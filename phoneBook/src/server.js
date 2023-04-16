import path from 'path';
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './components/utils/jsxRender';
import indexRouter from './components/routes/indexRouter';
import apiAuthRouter from './components/routes/apiAuthRouter';
import apiCompanyRouter from './components/routes/apiCompanyRouter';

require('dotenv').config();

const PORT = process.env.PORT || 3002;
const app = express();
const FileStore = store(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/api/auth/', apiAuthRouter);
app.use('/api/', apiCompanyRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
