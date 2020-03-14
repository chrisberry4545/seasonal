import { IUser } from '@chrisb-dev/seasonal-shared';
import {
  adminGetOneDbUser,
  adminCreateDbUser,
  adminGetAllDbUsers,
  adminDeleteDbUser,
  adminEditDbUser
} from '../data-access';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

export const adminCreateUser = async (item: IUser): Promise<IUser> => {
  const { username, password } = item;
  const hashedPassword = await hashPassword(password);
  return await adminCreateDbUser(username, hashedPassword);
};

export const adminGetOneUser = async (
  id: string
): Promise<IUser | null> => adminGetOneDbUser(id);

export const adminGetAllUsers = async (): Promise<IUser[]> =>
  adminGetAllDbUsers();

export const adminEditUser = async (
  item: IUser
): Promise<IUser> => {
  const hashedPassword = await hashPassword(item.password);
  return adminEditDbUser({
    ...item,
    password: hashedPassword
  });
};

export const adminDeleteUser = async (
  id: string
): Promise<IUser> => adminDeleteDbUser(id);
