import {
  requiredValidation
} from './required.validation';

const invalidMessage = 'Required';

describe('requiredValidation', () => {

  test('undefined is not valid', () =>
    expect(requiredValidation(undefined)).toBe(invalidMessage));

  test('null is not valid', () =>
    expect(requiredValidation(null)).toBe(invalidMessage));

  test('empty strings are not valid', () =>
    expect(requiredValidation('')).toBe(invalidMessage));

  test('empty arrays are not valid', () =>
    expect(requiredValidation([])).toBe(invalidMessage));

  test('zeroes are valid', () =>
    expect(requiredValidation(0)).toBeNull());

  test('non strings are valid', () =>
    expect(requiredValidation('0')).toBeNull());

  test('arrays with values are valid', () =>
    expect(requiredValidation(['0'])).toBeNull());

});
