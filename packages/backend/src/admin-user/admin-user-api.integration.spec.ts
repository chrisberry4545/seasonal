import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { generateRestEndpointTests } from '../api/admin/test-utils/generate-rest-endpoint-tests';
import { ENDPOINT_ADMIN_USER } from '../config';

generateRestEndpointTests<IUser>({
  adminOnly: true,
  path: `/${ENDPOINT_ADMIN_USER}`,
  propertiesNotReturned: ['password'],
  singleItemId: '53f5a3d1-db75-4c62-a309-79b3eea329b3',
  validItem: {
    password: 'password',
    roles: ['admin'],
    username: 'username'
  } as IUser,
  validItemForEdit: {
    password: 'password2',
    roles: ['new-role'],
    username: 'username2'
  } as IUser
});
