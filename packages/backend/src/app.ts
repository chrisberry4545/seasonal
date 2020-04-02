import express from 'express';
import helmet from 'helmet';
import {
  corsOptions
} from './middleware/cors-options';
import { v2Api } from './api/v2';
import bodyParser from 'body-parser';
import { adminApi } from './api/admin';
import cors from 'cors';
import {
  error404Middleware,
  errorMiddleware
} from './middleware/error-middleware';

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());

app.use('/', v2Api());
app.use('/admin', adminApi());
app.use(errorMiddleware());
app.use(error404Middleware());

export {
  app
};
