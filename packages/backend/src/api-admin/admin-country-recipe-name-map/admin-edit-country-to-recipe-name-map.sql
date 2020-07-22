UPDATE country_to_recipe_name_map
SET
  name = $2,
  country_id = $3,
  recipe_id = $4,
  languages = $5
WHERE id = $1
RETURNING *;
