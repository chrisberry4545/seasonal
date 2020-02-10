INSERT INTO food (
  name,
  description,
  image_url_small,
  substitute_food_ids
)
VALUES (
  $1,
  $2,
  $3,
  $4
)
RETURNING *;
