import { getPostgresInstance } from './get-postgres-instance';

export const getRecipeUrls = async <T>(): Promise<string[]> => {
  const db = await getPostgresInstance();
  const result = await db.query<{ link_url: string }>({
    text: `
      SELECT link_url FROM recipes
    `
  });
  db.release();
  return result.rows && result.rows.map((row) => row.link_url);
};
