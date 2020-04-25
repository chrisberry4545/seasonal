import { Request } from 'express';

export const getRegionIdFromQueryParams =
  (req: Request): string => (
    req.query['region-id']
    || req.query['country-code']
  ) as string;

export const getIsVeganFromQueryParams =
  (req: Request): boolean => req.query['is-vegan'] === 'true';

export const getIsVegetarianFromQueryParams =
  (req: Request): boolean => req.query['is-vegetarian'] === 'true';
