import fetch from 'node-fetch';
import food from './food-list/food.json';

const nonDataUrlFoodItems = food.filter(
  (foodItme) => foodItme.imageUrlSmall.slice(0, 10) !== 'data:image'
);

describe('check food images have not changed', () => {

  const getStatus = async (
    url: string
  ): Promise<number> => {
    const site = await fetch(url);
    return site.status;
  };

  beforeAll(() => jest.setTimeout(50000));

  test.each(nonDataUrlFoodItems)('%p food image still exists', async (foodItem) => {
    const status = await getStatus(foodItem.imageUrlSmall);
    expect(status).toBe(200);
  });

});
