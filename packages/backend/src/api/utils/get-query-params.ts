import { Request } from 'express';

export const getRegionIdFromQueryParams =
  (req: Request) => req.query['region-id']
    || req.query['country-code'];

export const getIsVeganFromQueryParams =
  (req: Request) => req.query['is-vegan'];

export const getIsVegetarianFromQueryParams =
  (req: Request) => req.query['is-vegetarian'];
