DELETE FROM translations_badge_name
WHERE id = $1
RETURNING *;
