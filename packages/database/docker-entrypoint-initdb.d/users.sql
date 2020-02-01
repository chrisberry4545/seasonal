DROP TABLE IF EXISTS public.users;

CREATE TABLE public.users
(
  id uuid,
  username text,
  password text,
  roles text[]
);

INSERT INTO public.users (
  username,
  password,
  roles
)
VALUES
(
  'admin-user',
  'admin-user-password',
  ARRAY['admin']::text[]
),
(
  'non-admin-user',
  'non-admin-user-password',
  ARRAY[]::text[]
);
