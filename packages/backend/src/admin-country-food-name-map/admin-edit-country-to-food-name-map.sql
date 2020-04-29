UPDATE country_to_food_name_map
SET
  name = $2,
  country_id = $3,
  food_id = $4
WHERE id = $1
RETURNING *;
