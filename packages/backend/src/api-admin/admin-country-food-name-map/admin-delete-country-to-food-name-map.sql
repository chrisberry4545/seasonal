DELETE FROM country_to_food_name_map
WHERE id = $1
RETURNING *;
