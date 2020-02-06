import { IUser } from '@chrisb-dev/seasonal-shared';
import {
  getUserForLogin,
  getUserById,
  createDbUser,
  getAllUsers,
  deleteDbUser,
  editDbUser
} from '../data-access';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const createUser = async (user: IUser): Promise<IUser> => {
  const { username, password } = user;
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
  userId: string
): Promise<IUser | null> => getUserById(userId);

export const fetchAllUsers = async (): Promise<IUser[]> =>
  getAllUsers();

export const deleteUser = async (
  userId: string
): Promise<IUser> => deleteDbUser(userId);

export const editUser = async (
  user: IUser
): Promise<IUser> => editDbUser(user);
