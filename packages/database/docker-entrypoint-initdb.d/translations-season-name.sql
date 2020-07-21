DROP TABLE IF EXISTS public.translations_season_name;

CREATE TABLE public.translations_season_name
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  season_id uuid,
  name text,
  languages text[]
);

INSERT INTO public.translations_season_name (
  id,
  season_id,
  name,
  languages
)
VALUES
  (
    '620e73ae-da4c-4caa-a726-2e021adbb235',
    'eec0b2bb-4fbd-46df-b905-8d2ee2fb991a',
    'USA February',
    '{"en-US"}'
  );
