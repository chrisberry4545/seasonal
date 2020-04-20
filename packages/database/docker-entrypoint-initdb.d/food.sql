DROP TABLE IF EXISTS public.food;

CREATE TABLE public.food
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  name text,
  substitute_food_ids uuid[],
  image_url_small text,
  description text,
  badge_ids uuid[]
);

INSERT INTO public.food (
  id,
  name,
  substitute_food_ids,
  image_url_small,
  description,
  badge_ids
)
VALUES
  (
    'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    'Beetroot',
    ARRAY[]::uuid[],
    'https://eat-seasonal.co.uk/images/food/broccoli.jpg',
    'beetroot description',
    ARRAY[]::uuid[]
  ),
  (
    'dd9ba012-8f8e-48af-9775-0139374dd94c',
    'Apple',
    ARRAY[]::uuid[],
    'https://eat-seasonal.co.uk/images/food/broccoli.jpg',
    'apple description',
    ARRAY[]::uuid[]
  ),
  (
    'd1df368e-6ed1-4a50-bb7d-6163c15df1d3',
    'Onion',
    ARRAY[]::uuid[],
    'https://onion.com',
    'onion description',
    ARRAY['5de57673-eee8-444a-b7be-d9ab553052cf']::uuid[]
  );
