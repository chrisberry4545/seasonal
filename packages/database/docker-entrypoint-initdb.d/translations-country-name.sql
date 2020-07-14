DROP TABLE IF EXISTS public.translations_country_name;

CREATE TABLE public.translations_country_name
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  country_id uuid,
  name text,
  languages text[]
);

INSERT INTO public.translations_country_name (
  id,
  country_id,
  name,
  languages
)
VALUES
  (
    '6f4182a8-5bd8-45d8-bb7c-076719d209fc',
    '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    'USA - UK',
    '{"en_US"}'
  );
