import {
  getScreenWidth
} from './get-screen-width';
import { Dimensions, ScaledSize } from 'react-native';

describe('getScreenWidth', () => {
  beforeEach(() =>
    jest.spyOn(
      Dimensions, 'get'
    ).mockReturnValue({
      width: 50.5
    } as ScaledSize)
  );

  test('returns a rounded version of the window width', () =>
    expect(getScreenWidth()).toBe(51));
});
