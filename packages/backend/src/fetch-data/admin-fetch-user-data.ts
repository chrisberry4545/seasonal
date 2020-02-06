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

export const adminCreateUser = async (user: IUser): Promise<IUser> => {
  const { username, password } = user;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return await adminCreateDbUser(username, hashedPassword);
};

export const adminGetOneUser = async (
  userId: string
): Promise<IUser | null> => adminGetOneDbUser(userId);

export const adminGetAllUsers = async (): Promise<IUser[]> =>
  adminGetAllDbUsers();

export const adminEditUser = async (
  user: IUser
): Promise<IUser> => adminEditDbUser(user);

export const adminDeleteUser = async (
  userId: string
): Promise<IUser> => adminDeleteDbUser(userId);
