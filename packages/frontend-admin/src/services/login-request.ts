import { LOGIN_URL } from '../config';
import { setAccessToken } from './set-access-token';

export const loginRequest = async (
  username: string, password: string
): Promise<void> => {
  const response = await fetch(LOGIN_URL, {
    body: JSON.stringify({
      password,
      username
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  setAccessToken(result.token);
  return;
};
