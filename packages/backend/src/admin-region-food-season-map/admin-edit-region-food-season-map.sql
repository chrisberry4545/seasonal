UPDATE region_to_season_food_map
SET
  region_id = $2,
  food_id = $3,
  season_id = $4
WHERE id = $1
RETURNING *;
