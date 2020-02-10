SELECT
  code,
  name,
  country_id,
  json_build_object('lat', lat, 'lng', lng) AS lat_lng,
  is_disabled
FROM regions
WHERE
  $1::text is NULL
OR
  code = $1;
