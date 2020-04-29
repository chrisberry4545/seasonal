INSERT INTO region_to_season_food_map (
  region_id,
  food_id,
  season_id
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
