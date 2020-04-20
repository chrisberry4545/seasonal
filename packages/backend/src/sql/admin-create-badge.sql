INSERT INTO badges (
  name,
  color
)
VALUES (
  $1,
  $2
)
RETURNING *;
