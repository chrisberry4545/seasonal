import { queryPostgres, getSqlQuery } from '../../postgres';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbTranslationsRegionName = async (
  item: ITranslationsRegionName
): Promise<ITranslationsRegionName> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-translations-region-name.sql`);
  const result = await queryPostgres<ITranslationsRegionName>(
    query,
    [
      item.name,
      item.regionId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
