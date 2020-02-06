import { IUser } from '@chrisb-dev/seasonal-shared';
import { generateRestEndpointTests } from './test-utils/generate-rest-endpoint-tests';

generateRestEndpointTests<IUser>({
  path: '/admin/user',
  propertiesNotReturned: ['password'],
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
