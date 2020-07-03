import fetch from 'node-fetch';
import recipes from './recipe-list/recipes.json';

describe('check recipes sites have not changed', () => {

  const getStatus = async (
    url: string
  ): Promise<number> => {
    const site = await fetch(url);
    return site.status;
  };

  beforeAll(() => jest.setTimeout(50000));

  test.each(recipes)('%p recipe appears to still exist', async (recipe) => {
    const status = await getStatus(recipe.linkUrl);
    expect(status).toMatchSnapshot(200);
  });

});
