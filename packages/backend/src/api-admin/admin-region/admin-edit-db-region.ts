import { queryPostgres, getSqlQuery } from '../../postgres';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbRegion = async (
  item: IDbRegion
): Promise<IDbRegion> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-region.sql`);
  const result = await queryPostgres<IDbRegion>(
    query,
    [
      item.id,
      item.code,
      item.name,
      item.countryId,
      item.lat,
      item.lng,
      item.isDisabled
    ]
  );
  return result.rows && result.rows[0];
};
