INSERT INTO country_to_food_name_map (
  name,
  country_id,
  food_id,
  languages
)
VALUES (
  $1,
  $2,
  $3,
  $4
)
RETURNING *;
