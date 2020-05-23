import { getStorage } from '../consts';

export const getAccessTokenHeaders = (): HeadersInit => {
  const token = getStorage().accessToken;
  return token
  ? {
    Authorization: `Bearer ${token}`
  }
  : {};
};
