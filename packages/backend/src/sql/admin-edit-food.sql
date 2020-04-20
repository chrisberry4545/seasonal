UPDATE food
SET
  name = $2,
  description = $3,
  image_url_small = $4,
  substitute_food_ids = $5,
  badge_ids = $6
WHERE id = $1
RETURNING *;
