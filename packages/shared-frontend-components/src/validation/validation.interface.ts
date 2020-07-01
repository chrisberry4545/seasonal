export type IValidation = (
  value: string | string[] | number | boolean | Array<[number, number]> | null | undefined
) => string | null;
