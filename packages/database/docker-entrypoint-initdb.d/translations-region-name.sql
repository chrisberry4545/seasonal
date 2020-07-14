DROP TABLE IF EXISTS public.translations_region_name;

CREATE TABLE public.translations_region_name
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  region_id text,
  name text,
  languages text[]
);

INSERT INTO public.translations_region_name (
  id,
  region_id,
  name,
  languages
)
VALUES
  (
    'd15f8cd3-302b-4c95-8b32-757ebf412463',
    '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    'USA - UK',
    '{"en_US"}'
  );
