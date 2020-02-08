import { queryPostgres, getSqlQuery } from '../postgres';
import { IRegion } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbRegion = async (
  item: IRegion
): Promise<IRegion> => {
  const query = await getSqlQuery('admin-create-region.sql');
  const result = await queryPostgres<IRegion>(
    query,
    [
      item.code,
      item.name,
      item.countryId,
      item.latLng.lat,
      item.latLng.lng,
      item.isDisabled
    ]
  );
  return result.rows && result.rows[0];
};

const getRegionQuery = (): Promise<string> =>
  getSqlQuery('admin-get-regions.sql');

export const adminGetAllDbRegions = async (): Promise<IRegion[]> => {
  const query = await getRegionQuery();
  const result = await queryPostgres<IRegion>(
    query,
    [null]
  );
  return result.rows;
};

export const adminGetOneDbRegion = async (
  id: string
): Promise<IRegion> => {
  const query = await getRegionQuery();
  const result = await queryPostgres<IRegion>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};

export const adminEditDbRegion = async (
  item: IRegion
): Promise<IRegion> => {
  const query = await getSqlQuery('admin-edit-region.sql');
  const result = await queryPostgres<IRegion>(
    query,
    [
      item.code,
      item.name,
      item.countryId,
      item.latLng.lat,
      item.latLng.lng,
      item.isDisabled
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbRegion = async (
  id: string
): Promise<IRegion> => {
  const query = await getSqlQuery('admin-delete-region.sql');
  const result = await queryPostgres<IRegion>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
