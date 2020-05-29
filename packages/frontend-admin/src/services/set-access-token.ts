import { getStorage } from '../consts';

export const setAccessToken = (token: string) => {
  getStorage().accessToken = token;
};
