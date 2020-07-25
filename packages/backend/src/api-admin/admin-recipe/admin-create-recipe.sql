INSERT INTO recipes (
  link_url,
  image_url_small,
  is_vegetarian,
  is_vegan,
  name,
  primary_food_in_recipe_ids,
  secondary_food_in_recipe_ids,
  languages
)
VALUES (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8
)
RETURNING *;
