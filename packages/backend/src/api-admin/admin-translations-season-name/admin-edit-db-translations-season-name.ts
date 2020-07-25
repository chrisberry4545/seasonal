import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbTranslationsSeasonName = async (
  item: ITranslationsSeasonName
): Promise<ITranslationsSeasonName> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-translations-season-name.sql`);
  const result = await queryPostgres<ITranslationsSeasonName>(
    query,
    [
      item.id,
      item.name,
      item.seasonId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
