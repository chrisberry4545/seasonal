INSERT INTO country_to_recipe_name_map (
  name,
  recipe_id
  food_id,
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
