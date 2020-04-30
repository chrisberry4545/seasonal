INSERT INTO regions (
  id,
  code,
  name,
  country_id,
  lat,
  lng,
  is_disabled
)
VALUES (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7
)
RETURNING *;
