import { getStorage } from '../consts';

export const setAccessToken = (token: string) => {
  getStorage().accessToken = token;
};

export const getAccessTokenHeaders = (): HeadersInit => {
  const token = getStorage().accessToken;
  return token
  ? {
    Authorization: `Bearer ${token}`
  }
  : {};
};
