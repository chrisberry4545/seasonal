import allowedOrigins from './allowed-origins.json';
import { CorsOptions } from 'cors';

const isAllowedOrigin = (origin: string | undefined) => {
  return !origin || (
    origin.includes('localhost') ||
    (allowedOrigins as string[]).includes(origin)
  );
};

export const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
