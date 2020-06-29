import { getPostgresInstance } from './get-postgres-instance';

export const getRecipes = async <T>(): Promise<Array<{
  linkUrl: string,
  name: string
}>> => {
  const db = await getPostgresInstance();
  const result = await db.query<{ name: string, link_url: string }>({
    text: `
      SELECT name, link_url FROM recipes
    `
  });
  db.release();
  return result.rows && result.rows.map((row) => ({
    linkUrl: row.link_url,
    name: row.name
  }));
};
