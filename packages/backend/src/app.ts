import express from 'express';
import helmet from 'helmet';
import {
  cors
} from './middleware/cors';
import { v2Api } from './api/v2';
import bodyParser from 'body-parser';
import { adminApi } from './api/admin';

const app = express();

app.use(cors);
app.use(helmet());
app.use(bodyParser.json());

app.use('/', v2Api());
app.use('/admin', adminApi());

export {
  app
};
