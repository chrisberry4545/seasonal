export const getQueryString = (
  isVegetarian?: boolean, isVegan?: boolean, regionId?: string
) => {
  const query = [
    isVegetarian && 'is-vegetarian=true',
    isVegan && 'is-vegan=true',
    regionId && `region-id=${regionId}`
  ].filter(Boolean).join('&');
  const queryString = query && `?${query}`;
  return queryString;
};
