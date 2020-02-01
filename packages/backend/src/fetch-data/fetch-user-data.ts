import { IUser } from '@chrisb-dev/seasonal-shared';
import {
  getUserForLogin,
  getUserById,
  createDbUser,
  getAllUsers
} from '../data-access';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const createUser = async (
  username: string,
  password: string
): Promise<void> => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return await createDbUser(username, hashedPassword);
};

export const fetchUserWithUsernameAndPassword = async (
  username: string,
  password: string
): Promise<IUser | null> => {
  const user = await getUserForLogin(username);
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
};

export const fetchUserById = async (
  id: string
): Promise<IUser | null> => getUserById(id);

export const fetchAllUsers = async (): Promise<IUser[]> =>
  getAllUsers();
