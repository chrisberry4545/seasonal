import { getPostgresInstance } from './get-postgres-instance';

export const getRecipes = async <T>(): Promise<Array<{
  imageUrlSmall: string,
  linkUrl: string,
  name: string
}>> => {
  const db = await getPostgresInstance();
  const result = await db.query<{
    name: string,
    link_url: string,
    image_url_small: string
  }>({
    text: `
      SELECT name, link_url, image_url_small FROM recipes
    `
  });
  db.release();
  return result.rows && result.rows.map((row) => ({
    imageUrlSmall: row.image_url_small,
    linkUrl: row.link_url,
    name: row.name
  }));
};
