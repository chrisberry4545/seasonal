import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbTranslationsBadgeNames = async (
  id: string | null
): Promise<ITranslationsBadgeName[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-db-translations-badge-names.sql`);
  const result = await queryPostgres<ITranslationsBadgeName>(
    query,
    [id]
  );
  return result.rows;
};
