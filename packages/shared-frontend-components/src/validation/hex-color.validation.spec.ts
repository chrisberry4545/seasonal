import {
  hexColorValidation
} from './hex-color.validation';

const invalidMessage = 'Use an uppercase hex color';

describe('hexColorValidation', () => {

  test('is valid if null', () =>
    expect(hexColorValidation(null)).toBeNull());

  test('is valid if empty', () =>
    expect(hexColorValidation('')).toBeNull());

  test('is valid if it is a valid hex', () =>
    expect(hexColorValidation('#FFFFFF')).toBeNull());

  test('is not valid if it includes lower case', () =>
    expect(hexColorValidation('#fFFFFF')).toBe(invalidMessage));

  test('is not valid if missing #', () =>
    expect(hexColorValidation('FFFFFF')).toBe(invalidMessage));

  test('is not valid if it is too many letters', () =>
    expect(hexColorValidation('#FFFFFFF')).toBe(invalidMessage));

});
