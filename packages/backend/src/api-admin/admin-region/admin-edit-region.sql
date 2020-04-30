UPDATE regions
SET
  code = $2,
  name = $3,
  country_id = $4,
  lat = $5,
  lng = $6,
  is_disabled = $7
WHERE id = $1
RETURNING *;
