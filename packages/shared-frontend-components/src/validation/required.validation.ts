import { IValidation } from './validation.interface';

export const requiredValidation: IValidation = (
  value: string | string[] | number | boolean
): string | null => (
  value === null
  || value === undefined
  || value === ''
  || ((value as string[]).length && (value as string[]).length === 0)
  ? 'Required'
  : null
);
