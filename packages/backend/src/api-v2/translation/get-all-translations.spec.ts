import { getAllTranslations } from './get-all-translations';

describe('getAllTranslations', () => {
  test('matches snapshot', () => expect(getAllTranslations()).toMatchSnapshot());
});
