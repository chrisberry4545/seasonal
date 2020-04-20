import {
  adminGetAllBadges,
  adminGetOneBadge,
  adminCreateBadge,
  adminDeleteBadge,
  adminEditBadge
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const badgeApi = () => generateRestApi({
  create: adminCreateBadge,
  deleteOne: adminDeleteBadge,
  edit: adminEditBadge,
  getAll: adminGetAllBadges,
  getOne: adminGetOneBadge
});
