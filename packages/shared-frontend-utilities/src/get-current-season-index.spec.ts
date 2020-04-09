import { getCurrentSeasonIndex } from './get-current-season-index';
import * as now from './now';

describe('getCurrentSeasonIndex', () => {
  beforeEach(() =>
    jest.spyOn(now, 'now')
      .mockReturnValue({
        getUTCMonth: () => 1
      } as any));

  test('returns the current UTC month', () =>
    expect(getCurrentSeasonIndex()).toBe(1));
});
