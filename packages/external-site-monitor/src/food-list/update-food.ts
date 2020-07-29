import fs from 'fs';
import { errorLogger } from '../logger/logger';
import { getFood } from '../postgres/get-food';

export const updateFood = async (): Promise<boolean> => {
  try {
    const food = await getFood();
    fs.writeFileSync(`${__dirname}/food.json`, JSON.stringify(food, null, 2));
    return true;
  } catch (e) {
    errorLogger.log(e, 'Failed to update food');
    return false;
  }
};
