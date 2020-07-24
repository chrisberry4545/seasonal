import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export const getQueryString = (
  isVegetarian?: boolean,
  isVegan?: boolean,
  regionId?: string,
  language?: LANGUAGES
) => {
  const query = [
    isVegetarian && 'is-vegetarian=true',
    isVegan && 'is-vegan=true',
    regionId && `region-id=${regionId}`,
    language && `language=${language}`
  ].filter(Boolean).join('&');
  const queryString = query && `?${query}`;
  return queryString;
};
