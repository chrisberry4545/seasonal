import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbTranslationsCountryName = async (
  item: ITranslationsCountryName
): Promise<ITranslationsCountryName> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-translations-country-name.sql`);
  const result = await queryPostgres<ITranslationsCountryName>(
    query,
    [
      item.id,
      item.name,
      item.countryId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
