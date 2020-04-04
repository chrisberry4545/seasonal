import { LOGIN_URL } from '../config';

export const loginRequest = async (
  username: string, password: string
): Promise<void> => {
  const response = await fetch(LOGIN_URL, {
    body: JSON.stringify({
      password,
      username
    }),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });
  if (response.status !== 200) {
    const result = await response.json();
    throw new Error(result.message);
  }
  return;
};
