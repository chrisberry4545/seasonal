INSERT INTO users (
  username,
  password,
  roles
)
VALUES(
  $1,
  $2,
  ARRAY[]::text[]
)
RETURNING id, username;
