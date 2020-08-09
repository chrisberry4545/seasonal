import express from 'express';
import helmet from 'helmet';
import {
  corsOptions
} from './middleware/cors-options';
import { apiV2 } from './api-v2/api-v2';
import bodyParser from 'body-parser';
import { apiAdmin } from './api-admin/api-admin';
import cors from 'cors';
import {
  errorMiddleware
} from './middleware/error-middleware';
import { ENDPOINT_ADMIN, ENDPOINT_V2 } from '@chrisb-dev/seasonal-shared-models';

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());

app.use(`/${ENDPOINT_V2}`, apiV2());
app.use(`/${ENDPOINT_ADMIN}`, apiAdmin());
app.use(errorMiddleware());

export {
  app
};
