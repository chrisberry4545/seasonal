import fetch from 'node-fetch';
import recipes from './recipe-list/recipes.json';
import cheerio from 'cheerio';

describe('check recipes sites have not changed', () => {

  const removeScriptTags = (text: string): string => {
    const $ = cheerio.load(text);
    $('scripts').remove();
    return $('body').text();
  };

  const checkIfSiteBlocksCrawlers = (text: string): boolean =>
    text.includes('Javascript is disabled or blocked by an extension');

  const getContents = async (url: string): Promise<string> => {
    const web = await fetch(url);
    const text = await web.text();
    if (checkIfSiteBlocksCrawlers(text)) {
      return 'Site blocks crawlers - assuming nothing has changed';
    }
    return removeScriptTags(text).replace(/\s/g, '').slice(100, 500);
  };

  beforeAll(() => jest.setTimeout(50000));

  test.each(recipes)('%p recipe matches snapshot', async (recipeUrl) => {
    const allContent = await getContents(recipeUrl);
    expect(allContent).toMatchSnapshot();
  });

});
