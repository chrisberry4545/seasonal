DROP TABLE IF EXISTS public.translations_badge_name;

CREATE TABLE public.translations_badge_name
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  badge_id uuid,
  name text,
  languages text[]
);

INSERT INTO public.translations_badge_name (
  id,
  badge_id,
  name,
  languages
)
VALUES
  (
    'cdfc3518-27d1-44bc-bbab-7b95b039e333',
    '5de57673-eee8-444a-b7be-d9ab553052cf',
    'USA high in vitamin D',
    '{"en_US"}'
  );
