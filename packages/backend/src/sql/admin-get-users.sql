SELECT
  id,
  username,
  roles
FROM users
WHERE
  $1::uuid is NULL
OR
  id = $1
ORDER BY username;
