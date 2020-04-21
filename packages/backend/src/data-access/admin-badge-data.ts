import { queryPostgres, getSqlQuery } from '../postgres';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbBadge = async (
  item: IBadge
): Promise<IBadge> => {
  const query = await getSqlQuery('admin-create-badge.sql');
  const result = await queryPostgres<IBadge>(
    query,
    [
      item.name
    ]
  );
  return result.rows && result.rows[0];
};

const adminGetBadges = async (
  id: string | null
): Promise<IBadge[]> => {
  const query = await getSqlQuery('admin-get-badges.sql');
  const result = await queryPostgres<IBadge>(
    query,
    [id]
  );
  return result.rows;
};

export const adminGetAllDbBadges = async (): Promise<IBadge[]> =>
  adminGetBadges(null);

export const adminGetOneDbBadge = async (
  id: string
): Promise<IBadge> => {
  const results = await adminGetBadges(id);
  return results && results[0];
};

export const adminEditDbBadge = async (
  item: IBadge
): Promise<IBadge> => {
  const query = await getSqlQuery('admin-edit-badge.sql');
  const result = await queryPostgres<IBadge>(
    query,
    [
      item.id,
      item.name
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbBadge = async (
  id: string
): Promise<IBadge> => {
  const query = await getSqlQuery('admin-delete-badge.sql');
  const result = await queryPostgres<IBadge>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
