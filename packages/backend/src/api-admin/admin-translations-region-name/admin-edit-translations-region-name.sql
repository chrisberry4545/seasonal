UPDATE translations_region_name
SET
  name = $2,
  region_id = $3,
  languages = $4
WHERE id = $1
RETURNING *;
