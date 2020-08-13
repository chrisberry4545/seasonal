import { getAllLanguages } from './get-all-languages';

describe('getAllLanguages', () => {
  test('matches snapshot', () => expect(getAllLanguages()).toMatchSnapshot());
});
