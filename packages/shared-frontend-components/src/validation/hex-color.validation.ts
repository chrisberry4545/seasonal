import { IValidation } from './validation.interface';

export const hexColorValidation: IValidation = (
  value: string | string[] | number | boolean | undefined | null
): string | null =>
  (value && !/^#[A-F0-9]{6}$/.test(value.toString()))
    ? 'Use an uppercase hex color'
    : null;
