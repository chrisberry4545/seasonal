DELETE FROM countries
WHERE id = $1
RETURNING *;
