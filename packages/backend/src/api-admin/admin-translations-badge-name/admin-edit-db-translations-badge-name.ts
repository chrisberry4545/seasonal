import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbTranslationsBadgeName = async (
  item: ITranslationsBadgeName
): Promise<ITranslationsBadgeName> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-translations-badge-name.sql`);
  const result = await queryPostgres<ITranslationsBadgeName>(
    query,
    [
      item.id,
      item.name,
      item.badgeId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
