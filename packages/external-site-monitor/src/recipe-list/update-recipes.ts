// tslint:disable-next-line
require('env-yaml').config();

import { getRecipeUrls } from '../postgres/get-recipe-urls';
import fs from 'fs';
import { shutdownPostgresInstance } from '../postgres/shutdown-postgres-instance';
import { errorLogger } from '../logger/logger';

export const updateRecipes = async () => {
  let exitCode = 0;
  try {
    const recipeUrls = await getRecipeUrls();
    fs.writeFileSync(`${__dirname}/recipes.json`, JSON.stringify(recipeUrls));
  } catch (e) {
    errorLogger.log(e, 'Failed to update recipes');
    exitCode = 1;
  }
  await shutdownPostgresInstance();
  process.exit(exitCode);
};

(async () => await updateRecipes())();
