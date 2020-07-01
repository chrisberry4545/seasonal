UPDATE countries
SET
  name = $2,
  bounds = $3
WHERE id = $1
RETURNING *;
