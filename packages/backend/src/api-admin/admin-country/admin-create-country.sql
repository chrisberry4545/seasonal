INSERT INTO countries (
  name,
  bounds
)
VALUES (
  $1,
  $2
)
RETURNING *;
