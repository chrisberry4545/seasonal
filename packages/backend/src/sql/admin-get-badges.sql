SELECT * FROM badges
WHERE
  $1::uuid is NULL
OR
  id = $1
ORDER BY name;
