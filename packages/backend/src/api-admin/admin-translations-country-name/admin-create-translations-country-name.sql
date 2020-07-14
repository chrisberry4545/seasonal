INSERT INTO translations_country_name (
  name,
  country_id,
  languages
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
