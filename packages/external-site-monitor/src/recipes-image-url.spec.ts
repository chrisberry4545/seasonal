import fetch from 'node-fetch';
import recipes from './recipe-list/recipes.json';

describe('check recipes images have not changed', () => {

  const getStatus = async (
    url: string
  ): Promise<number> => {
    const site = await fetch(url);
    return site.status;
  };

  beforeAll(() => jest.setTimeout(50000));

  test.each(recipes)('%p recipe image still exists', async (recipe) => {
    const status = await getStatus(recipe.imageUrlSmall);
    expect(status).toBe(200);
  });

});
