import { shutdownPostgresInstance } from './postgres';

afterAll(async () => await shutdownPostgresInstance());
