// tslint:disable-next-line
require('env-yaml').config();

import { getRecipes } from '../postgres/get-recipes';
import fs from 'fs';
import { errorLogger } from '../logger/logger';

export const updateRecipes = async (): Promise<boolean> => {
  try {
    const recipeUrls = await getRecipes();
    fs.writeFileSync(`${__dirname}/recipes.json`, JSON.stringify(recipeUrls, null, 2));
    return true;
  } catch (e) {
    errorLogger.log(e, 'Failed to update recipes');
    return false;
  }
};
