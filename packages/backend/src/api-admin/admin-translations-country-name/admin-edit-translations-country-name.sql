UPDATE translations_country_name
SET
  name = $2,
  country_id = $3,
  languages = $4
WHERE id = $1
RETURNING *;
