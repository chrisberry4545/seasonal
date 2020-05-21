import {
  Cache, cacheFunctionResponse
} from '../../cache';

import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { getAllDbCountries } from './get-all-db-countries';

const allCountryDataCache = new Cache<ICountry[]>();
const allCountryDataCacheKey = 'all-countries';

export const getAllCachedCountries = () => cacheFunctionResponse(
  allCountryDataCache,
  allCountryDataCacheKey,
  (): Promise<ICountry[]> => getAllDbCountries()
);
