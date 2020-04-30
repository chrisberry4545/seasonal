import { IUser } from '@chrisb-dev/seasonal-shared-models';
import {
  getUserForLogin
} from './get-user-for-login';
import bcrypt from 'bcrypt';

export const getUserLogin = async (
  username: string,
  password: string
): Promise<IUser | null> => {
  const user = await getUserForLogin(username);
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
};
