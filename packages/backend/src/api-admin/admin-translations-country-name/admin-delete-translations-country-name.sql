DELETE FROM translations_country_name
WHERE id = $1
RETURNING *;
