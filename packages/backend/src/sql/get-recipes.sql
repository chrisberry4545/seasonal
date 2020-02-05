SELECT * FROM recipes
WHERE
  $1::uuid is NULL
OR
  id = $1;
