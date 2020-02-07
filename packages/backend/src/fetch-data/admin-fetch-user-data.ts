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

export const adminCreateUser = async (item: IUser): Promise<IUser> => {
  const { username, password } = item;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return await adminCreateDbUser(username, hashedPassword);
};

export const adminGetOneUser = async (
  id: string
): Promise<IUser | null> => adminGetOneDbUser(id);

export const adminGetAllUsers = async (): Promise<IUser[]> =>
  adminGetAllDbUsers();

export const adminEditUser = async (
  item: IUser
): Promise<IUser> => adminEditDbUser(item);

export const adminDeleteUser = async (
  id: string
): Promise<IUser> => adminDeleteDbUser(id);
