import { getAccessTokenHeaders } from './access-token';

export const makeAuthorizedRequest = async <T>(
  url: string,
  requestOptions?: RequestInit
): Promise<T> => {
  const response = await fetch(
    url,
    {
      ...requestOptions,
      headers: {
        ...(requestOptions && requestOptions.headers),
        'Content-Type': 'application/json',
        ...getAccessTokenHeaders()
      }
    }
  );
  if (response.status === 401) {
    location.href = process.env.PUBLIC_URL;
    throw new Error('Unauthorized');
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
};
