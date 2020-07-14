import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbTranslationsCountryName = async (
  item: ITranslationsCountryName
): Promise<ITranslationsCountryName> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-translations-country-name.sql`);
  const result = await queryPostgres<ITranslationsCountryName>(
    query,
    [
      item.name,
      item.countryId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
