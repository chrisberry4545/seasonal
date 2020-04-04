
import {
  app
} from '../../../app';
import supertest from 'supertest';
import { Response } from 'supertest';

export const callLoginEndpointForUser = async (
  username: string,
  password: string
) => {
  const response = await supertest(app).post('/admin/login').send({
    password,
    username
  });
  return response;
};

export const extractJwtCookie = (response: Response) => {
  const setCookieHeader = response.header['set-cookie'];
  const tokenToProcess = /jwt=(.+?);\s/.exec(setCookieHeader);
  return tokenToProcess && tokenToProcess[1];
};

export const getAdminJwt = async () => {
  const response = await callLoginEndpointForUser(
    'admin-user',
    'admin-user-password'
  );
  return extractJwtCookie(response);
};

export const getEditorJwt = async () => {
  const response = await callLoginEndpointForUser(
    'editor-user',
    'admin-user-password'
  );
  return extractJwtCookie(response);
};

export const getNonAdminJwt = async () => {
  const response = await callLoginEndpointForUser(
    'non-admin-user',
    'non-admin-user-password'
  );
  return extractJwtCookie(response);
};

export const attachJwtToken = (
  supertestInstance: supertest.Test,
  jwtToken: string | null
) => supertestInstance.set('Cookie', [`jwt=${jwtToken || ''}`]);

export const attachAdminJwtToken = async (
  supertestInstance: supertest.Test
) => {
  const adminJwt = await getAdminJwt();
  return attachJwtToken(
    supertestInstance,
    adminJwt
  );
};

export const attachEditorJwtToken = async (
  supertestInstance: supertest.Test
) => {
  const adminJwt = await getAdminJwt();
  return attachJwtToken(
    supertestInstance,
    adminJwt
  );
};

export const attachNonAdminJwtToken = async (
  supertestInstance: supertest.Test
) => {
  const nonAdminJwt = await getNonAdminJwt();
  return attachJwtToken(
    supertestInstance,
    nonAdminJwt
  );
};
