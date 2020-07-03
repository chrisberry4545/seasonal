// tslint:disable-next-line
require('env-yaml').config();

import { shutdownPostgresInstance } from './postgres/shutdown-postgres-instance';
import { updateRecipes } from './recipe-list/update-recipes';
import { updateFood } from './food-list/update-food';

(async () => {
  const successfullyUpdatedRecipes = await updateRecipes();
  const successfullyUpdatedFood = await updateFood();
  await shutdownPostgresInstance();
  const exitCode = !successfullyUpdatedRecipes || !successfullyUpdatedFood
    ? 1 : 0;
  process.exit(exitCode);
})();
