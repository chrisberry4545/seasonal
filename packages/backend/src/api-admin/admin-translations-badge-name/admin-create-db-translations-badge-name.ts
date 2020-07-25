import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbTranslationsBadgeName = async (
  item: ITranslationsBadgeName
): Promise<ITranslationsBadgeName> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-translations-badge-name.sql`);
  const result = await queryPostgres<ITranslationsBadgeName>(
    query,
    [
      item.name,
      item.badgeId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
