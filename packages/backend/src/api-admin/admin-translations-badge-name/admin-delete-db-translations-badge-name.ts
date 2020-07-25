import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbTranslationsBadgeName = async (
  id: string
): Promise<ITranslationsBadgeName> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-translations-badge-name.sql`);
  const result = await queryPostgres<ITranslationsBadgeName>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
