DROP TABLE IF EXISTS public.country_to_food_name_map;

CREATE TABLE public.country_to_food_name_map
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  country_id uuid,
  food_id uuid,
  name text
);

INSERT INTO public.country_to_food_name_map (
  id,
  country_id,
  food_id,
  name
)
VALUES
  (
    'dcec5b2c-403b-43ae-8745-ef368987552c',
    'd6e57673-eee8-444a-b7be-d9ab553052cf',
    'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    'Down Under Beetroot'
  );
