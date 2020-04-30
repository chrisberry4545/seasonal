SELECT * FROM country_to_food_name_map
WHERE
  $1::uuid is NULL
OR
  id = $1
ORDER BY name;
