UPDATE translations_season_name
SET
  name = $2,
  season_id = $3,
  languages = $4
WHERE id = $1
RETURNING *;
