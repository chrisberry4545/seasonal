DROP TABLE IF EXISTS public.users;

CREATE TABLE public.users
(
  id uuid,
  username text,
  password text,
  roles text[]
);

INSERT INTO public.users (
  id,
  username,
  password,
  roles
)
VALUES
(
  '30e59fda-220b-4e8b-9e01-3a9f8ceeec45',
  'admin-user',
  '$2b$10$wbQP.RBFpp4jQ0EqOyaPqer8n7Dqv1mTCje5E2TtH13uJCHbZAO5u',
  ARRAY['admin']::text[]
),
(
  '53f5a3d1-db75-4c62-a309-79b3eea329b3',
  'non-admin-user',
  '$2b$10$mav/.JRrBQW2gadKjEw10ONz9yToxM4lQW9fj22hTymJM.UzyaVXO',
  ARRAY[]::text[]
);
