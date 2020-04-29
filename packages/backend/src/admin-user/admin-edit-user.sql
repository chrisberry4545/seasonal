UPDATE users
SET
  username = $2,
  password = $3,
  roles = $4
WHERE id = $1
RETURNING id, username, roles;
