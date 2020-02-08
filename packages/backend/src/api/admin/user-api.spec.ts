import { IUser } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IUser>({
  path: '/admin/user',
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
