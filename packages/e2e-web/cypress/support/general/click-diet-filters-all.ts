import { getDietaryFilters } from './get-dietary-filters';

export const clickDietFiltersAll = () =>
  getDietaryFilters()
    .get('[data-e2e="radio-btn-ALL"]').click();
