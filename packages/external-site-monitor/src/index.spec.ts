import fetch from 'node-fetch';
import recipes from './recipe-list/recipes.json';
import cheerio from 'cheerio';

describe('check recipes sites have not changed', () => {

  const checkIfSiteBlocksCrawlers = (text: string): boolean =>
    text.includes('Javascript is disabled or blocked by an extension');

  const getContents = async (
    url: string,
    recipeName: string
  ): Promise<string> => {
    const site = await fetch(url);
    const text = await site.text();
    if (checkIfSiteBlocksCrawlers(text)) {
      return 'Site blocks crawlers - assuming nothing has changed';
    }
    const $ = cheerio.load(text);
    const bodyText = $('body').text().toLowerCase();
    const indexOfTitle = bodyText.indexOf(recipeName.slice(0, 10).toLowerCase());
    return bodyText.slice(indexOfTitle, indexOfTitle + 500).replace(/\s/g, '');
  };

  beforeAll(() => jest.setTimeout(50000));

  test.each(recipes)('%p recipe matches snapshot', async (recipe) => {
    const allContent = await getContents(recipe.linkUrl, recipe.name);
    expect(allContent).toMatchSnapshot();
  });

});
