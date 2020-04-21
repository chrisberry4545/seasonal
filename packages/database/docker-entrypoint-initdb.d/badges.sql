DROP TABLE IF EXISTS public.badges;

CREATE TABLE public.badges
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  name text
);

INSERT INTO public.badges (
  id,
  name
)
VALUES
  ('a2c52423-eb83-4cd9-9fdd-b6f9cb323c37', 'High in Vitamin C'),
  ('5de57673-eee8-444a-b7be-d9ab553052cf', 'High in Vitamin D');
