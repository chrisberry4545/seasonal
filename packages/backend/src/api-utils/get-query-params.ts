import { Request } from 'express';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { errorLogger } from '../logger/logger';

export const getRegionIdFromQueryParams =
  (req: Request): string => (
    req.query['region-id']
    || req.query['country-code']
  ) as string;

export const getIsVeganFromQueryParams =
  (req: Request): boolean => req.query['is-vegan'] === 'true';

export const getIsVegetarianFromQueryParams =
  (req: Request): boolean => req.query['is-vegetarian'] === 'true';

export const getLanguageFromQueryParams =
  (req: Request): LANGUAGES | null => {
    const language = req.query.language as LANGUAGES;
    if (language && !Object.values(LANGUAGES).includes(language)) {
      errorLogger.log('error', `Language is not supported: ${language}`);
      return null;
    }
    return language || null;
  };
