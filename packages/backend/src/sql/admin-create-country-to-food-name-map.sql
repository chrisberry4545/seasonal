INSERT INTO country_to_food_name_map (
  name,
  country_id
  food_id,
)
VALUES (
  $1
)
RETURNING *;
