INSERT INTO country_to_recipe_name_map (
  name,
  country_id,
  recipe_id,
  languages
)
VALUES (
  $1,
  $2,
  $3,
  $4
)
RETURNING *;
