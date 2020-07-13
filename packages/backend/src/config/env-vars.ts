import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const SKIP_CACHE = process.env.SKIP_CACHE || false;

export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'test-secret';

export const DEFAULT_REGION_ID =
  process.env.DEFAULT_REGION_ID || 'gbr';

export const DEFAULT_LANGUAGE_ID =
  (process.env.DEFAULT_LANGUAGE_ID || LANGUAGES.EN_GB) as LANGUAGES;
