DELETE FROM country_to_recipe_name_map
WHERE id = $1
RETURNING *;
