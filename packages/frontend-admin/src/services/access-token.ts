export const setAccessToken = (token: string) => {
  sessionStorage.accessToken = token;
};

export const getAccessTokenHeaders = (): HeadersInit => {
  const token = sessionStorage.accessToken;
  return token
  ? {
    Authorization: `Bearer ${token}`
  }
  : {};
};
