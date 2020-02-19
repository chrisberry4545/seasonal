INSERT INTO country_to_recipe_name_map (
  name,
  country_id,
  recipe_id
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
