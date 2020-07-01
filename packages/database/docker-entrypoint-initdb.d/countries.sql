DROP TABLE IF EXISTS public.countries;

CREATE TABLE public.countries
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  name text,
  bounds numeric[][]
);

INSERT INTO public.countries (
  id,
  name,
  bounds
)
VALUES
  (
    '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    'UK',
    '{ {-100, -100}, {0, -100}, {0, 0}, {-100, 0} }'
  ),
  (
    'd6e57673-eee8-444a-b7be-d9ab553052cf',
    'USA',
    '{ {-100, -100}, {0, -100}, {0, 0}, {-100, 0} }'
  ),
  (
    '2168cb5e-a2e9-4bf6-b50d-95ad6a79227c',
    'Country has no enabled regions',
    '{ {-100, -100}, {0, -100}, {0, 0}, {-100, 0} }'
  )
