INSERT INTO badges (
  name
)
VALUES (
  $1
)
RETURNING *;
