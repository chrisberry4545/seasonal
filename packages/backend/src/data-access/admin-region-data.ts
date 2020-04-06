import { queryPostgres, getSqlQuery } from '../postgres';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbRegion = async (
  item: IDbRegion
): Promise<IDbRegion> => {
  const query = await getSqlQuery('admin-create-region.sql');
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

const getRegionQuery = (): Promise<string> =>
  getSqlQuery('admin-get-regions.sql');

export const adminGetAllDbRegions = async (): Promise<IDbRegion[]> => {
  const query = await getRegionQuery();
  const result = await queryPostgres<IDbRegion>(
    query,
    [null]
  );
  return result.rows;
};

export const adminGetOneDbRegion = async (
  id: string
): Promise<IDbRegion> => {
  const query = await getRegionQuery();
  const result = await queryPostgres<IDbRegion>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};

export const adminEditDbRegion = async (
  item: IDbRegion
): Promise<IDbRegion> => {
  const query = await getSqlQuery('admin-edit-region.sql');
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

export const adminDeleteDbRegion = async (
  id: string
): Promise<IDbRegion> => {
  const query = await getSqlQuery('admin-delete-region.sql');
  const result = await queryPostgres<IDbRegion>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
