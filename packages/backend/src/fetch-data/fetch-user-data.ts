import { IUser } from '@chrisb-dev/seasonal-shared';
import {
  getDbUserForLogin
} from '../data-access';
import bcrypt from 'bcrypt';

export const getUserLogin = async (
  username: string,
  password: string
): Promise<IUser | null> => {
  const user = await getDbUserForLogin(username);
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
};
