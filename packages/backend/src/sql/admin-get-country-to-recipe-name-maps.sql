SELECT * FROM country_to_recipe_name_map
WHERE
  $1::uuid is NULL
OR
  id = $1;
