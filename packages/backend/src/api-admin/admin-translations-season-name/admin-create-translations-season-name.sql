INSERT INTO translations_season_name (
  name,
  season_id,
  languages
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
