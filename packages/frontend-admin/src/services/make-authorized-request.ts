import { getAccessTokenHeaders } from './access-token';

export const makeAuthorizedRequest = async <T>(
  url: string
): Promise<T> => {
  const response = await fetch(
    url,
    {
      headers: getAccessTokenHeaders()
    }
  );
  if (response.status === 401) {
    location.href = '/';
    throw new Error('Unauthorized');
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
};
