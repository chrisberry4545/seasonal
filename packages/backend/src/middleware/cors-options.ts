import { allowedOrigins } from './allowed-origins';
import { CorsOptions } from 'cors';

const isAllowedOrigin = (origin: string | undefined) => {
  return !origin || (
    (allowedOrigins as string[]).includes(origin)
  );
};

export const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      callback({ message: 'Not allowed by CORS', status: 400 } as any);
    }
  }
};
