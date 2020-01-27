import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import logger from 'morgan';

const app = express();

const middleware = [
  cors(),
  helmet(),
  compression(),
  express.json(),
  express.urlencoded({ extended: true }),
  logger('dev')
];

app.use(middleware);

app.get('/', (req, res) => {
  res.json('Hello world');
});

export default app;