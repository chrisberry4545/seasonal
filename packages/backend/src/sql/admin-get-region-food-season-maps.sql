SELECT * FROM region_to_season_food_map
WHERE
  $1::uuid is NULL
OR
  id = $1;
