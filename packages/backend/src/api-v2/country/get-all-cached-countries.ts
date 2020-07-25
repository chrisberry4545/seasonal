import {
  Cache, cacheFunctionResponse
} from '../../cache';

import { ICountry, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllDbCountries } from './get-all-db-countries';

const allCountryDataCache = new Cache<ICountry[]>();
const allCountryDataCacheKey = 'all-countries';

export const getAllCachedCountries = () => cacheFunctionResponse(
  allCountryDataCache,
  allCountryDataCacheKey,
  (language?: LANGUAGES): Promise<ICountry[]> =>
    getAllDbCountries(language)
);
