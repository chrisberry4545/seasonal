DELETE FROM region_to_season_food_map
WHERE
  id = $1
RETURNING *;
