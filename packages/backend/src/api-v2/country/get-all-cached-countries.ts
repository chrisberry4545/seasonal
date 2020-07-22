import {
  Cache, cacheFunctionResponse
} from '../../cache';

import { ICountry, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllDbCountries } from './get-all-db-countries';
import { DEFAULT_LANGUAGE_ID } from '../../config';

const allCountryDataCache = new Cache<ICountry[]>();
const allCountryDataCacheKey = 'all-countries';

export const getAllCachedCountries = () => cacheFunctionResponse(
  allCountryDataCache,
  allCountryDataCacheKey,
  (language: LANGUAGES = DEFAULT_LANGUAGE_ID): Promise<ICountry[]> =>
    getAllDbCountries(language)
);
