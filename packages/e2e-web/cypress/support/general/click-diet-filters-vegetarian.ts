import { getDietaryFilters } from './get-dietary-filters';

export const clickDietFiltersVegetarian = () =>
  getDietaryFilters()
    .get('[data-e2e="radio-btn-VEGETARIAN"]').click();
