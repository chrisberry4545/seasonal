SELECT * FROM translations_season_name
WHERE
  $1::uuid is NULL
OR
  id = $1
ORDER BY name;
