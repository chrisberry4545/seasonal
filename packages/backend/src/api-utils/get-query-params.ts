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
  (req: Request): LANGUAGES | undefined => {
    const language = req.query.language as LANGUAGES;
    if (language && !Object.values(LANGUAGES).includes(language)) {
      if (language.includes('fr-')) {
        return LANGUAGES.FR_FR;
      }
      if (language.includes('en-')) {
        return LANGUAGES.EN_US;
      }
      errorLogger.log('error', `Language is not supported: ${language}`);
      return undefined;
    }
    return language || undefined;
  };
