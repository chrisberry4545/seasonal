DROP TABLE IF EXISTS public.recipes;

CREATE TABLE public.recipes
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  link_url text,
  image_url_small text,
  is_vegetarian boolean,
  is_vegan boolean,
  name text,
  primary_food_in_recipe_ids uuid[],
  secondary_food_in_recipe_ids uuid[],
  languages text[]
);

INSERT INTO public.recipes (
  id,
  link_url,
  image_url_small,
  is_vegetarian,
  is_vegan,
  name,
  primary_food_in_recipe_ids,
  secondary_food_in_recipe_ids,
  languages
)
VALUES
  (
    '0f7fb18e-ac1d-4023-b315-91ca7e29ce4a',
    'https://pickled-beetroot.com',
    'https://eat-seasonal.co.uk/images/food/broccoli.jpg',
    false,
    true,
    'Pasta with a Beetroot sauce',
    ARRAY['f6a680ee-6d6e-4c42-a99d-15e575c32c20']::uuid[],
    ARRAY[]::uuid[],
    '{"en-US", "en-GB"}'
  ),
  (
    'fefc209f-ddaf-465d-941f-fe3fefa6b931',
    'https://apple-and-cheese.com',
    'https://apple-and-cheese.com/image',
    true,
    false,
    'Apple, Cheese & Onion',
    ARRAY['dd9ba012-8f8e-48af-9775-0139374dd94c']::uuid[],
    ARRAY['d1df368e-6ed1-4a50-bb7d-6163c15df1d3']::uuid[],
    '{"en-US", "en-GB"}'
  ),
  (
    '053c46cd-584e-46c5-a70d-b79b9ded3cca',
    'https://apple-beetroot-and-cheese.com',
    'https://eat-seasonal.co.uk/images/food/broccoli.jpg',
    false,
    false,
    'Apple, Beetroot & Meat',
    ARRAY['dd9ba012-8f8e-48af-9775-0139374dd94c', 'f6a680ee-6d6e-4c42-a99d-15e575c32c20']::uuid[],
    ARRAY[]::uuid[],
    '{"en-US", "en-GB"}'
  );
