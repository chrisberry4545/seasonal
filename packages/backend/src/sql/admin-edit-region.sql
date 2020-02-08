UPDATE regions
SET
  name = $2,
  country_id = $3,
  lat = $4,
  lng = $5,
  is_disabled = $6
WHERE code = $1
RETURNING *;
