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
import { ENDPOINT_ADMIN, ENDPOINT_V2 } from '@chrisb-dev/seasonal-shared-models';
import { initGraphQl } from './api/graphql/init-graphql';

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
initGraphQl(app);

app.use(`/${ENDPOINT_V2}`, v2Api());
app.use(`/${ENDPOINT_ADMIN}`, adminApi());
app.use(errorMiddleware());
app.use(error404Middleware());

export {
  app
};
