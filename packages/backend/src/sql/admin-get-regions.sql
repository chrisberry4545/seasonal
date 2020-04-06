SELECT
  id,
  code,
  name,
  country_id,
  lat,
  lng,
  is_disabled
FROM regions
WHERE
  $1::text is NULL
OR
  id = $1
ORDER BY name;
