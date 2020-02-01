
import {
  app
} from '../../../app';
import supertest from 'supertest';

export const callLoginEndpointForUser = async (
  username: string,
  password: string
) => {
  const response = await supertest(app).post('/login').send({
    password,
    username
  });
  return response;
};

export const getAdminJwt = async () => {
  const response = await callLoginEndpointForUser(
    'admin-user',
    'admin-user-password'
  );
  return response.body && response.body.token;
};

export const getNonAdminJwt = async () => {
  const response = await callLoginEndpointForUser(
    'non-admin-user',
    'non-admin-user-password'
  );
  return response.body && response.body.token;
};
