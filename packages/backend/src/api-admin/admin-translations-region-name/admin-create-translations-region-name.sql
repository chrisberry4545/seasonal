INSERT INTO translations_region_name (
  name,
  region_id,
  languages
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
