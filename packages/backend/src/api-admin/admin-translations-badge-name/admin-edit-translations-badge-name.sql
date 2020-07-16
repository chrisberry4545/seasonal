UPDATE translations_badge_name
SET
  name = $2,
  badge_id = $3,
  languages = $4
WHERE id = $1
RETURNING *;
