UPDATE recipes
SET
  link_url = $2,
  image_url_small = $3,
  is_vegetarian = $4,
  is_vegan = $5,
  name = $6,
  primary_food_in_recipe_ids = $7,
  secondary_food_in_recipe_ids = $8
WHERE id = $1
RETURNING *;
