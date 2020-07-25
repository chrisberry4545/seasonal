DELETE FROM translations_season_name
WHERE id = $1
RETURNING *;
