import { getDietaryFilters } from './get-dietary-filters';

export const clickDietFiltersVegan = () =>
  getDietaryFilters()
    .get('[data-e2e="radio-btn-VEGAN"]').click();
