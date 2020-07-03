import { getPostgresInstance } from './get-postgres-instance';

export const getFood = async <T>(): Promise<Array<{
  name: string,
  imageUrlSmall: string
}>> => {
  const db = await getPostgresInstance();
  const result = await db.query<{ name: string, image_url_small: string }>({
    text: `
      SELECT name, image_url_small FROM food
    `
  });
  db.release();
  return result.rows && result.rows.map((row) => ({
    imageUrlSmall: row.image_url_small,
    name: row.name
  }));
};
