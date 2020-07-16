INSERT INTO translations_badge_name (
  name,
  badge_id,
  languages
)
VALUES (
  $1,
  $2,
  $3
)
RETURNING *;
