DELETE FROM translations_region_name
WHERE id = $1
RETURNING *;
