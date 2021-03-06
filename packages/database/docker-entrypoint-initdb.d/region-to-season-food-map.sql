DROP TABLE IF EXISTS public.region_to_season_food_map;

CREATE TABLE public.region_to_season_food_map
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  region_id text,
  food_id uuid,
  season_id uuid
);

INSERT INTO public.region_to_season_food_map (
  id,
  region_id,
  food_id,
  season_id
)
VALUES
  -- UK
  (
    '01b40983-876c-42f0-959d-38cf98fea1c3',
    'gbr',
    'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    '41bcbb3a-5599-4f0c-8da9-3144cc5be6de'
  ),
  (
    '22be80d3-5154-43e7-a750-f0d03e4ca91a',
    'gbr',
    'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    'eec0b2bb-4fbd-46df-b905-8d2ee2fb991a'
  ),
  (
    '29ab0c3c-3876-456a-adfc-7baa438a13ff',
    'gbr',
    'dd9ba012-8f8e-48af-9775-0139374dd94c',
    '41bcbb3a-5599-4f0c-8da9-3144cc5be6de'
  ),
  (
    '053c46cd-584e-46c5-a70d-a39b9ded3cca',
    'gbr',
    '053c46cd-584e-46c5-a70d-b79b9ded3cca',
    '41bcbb3a-5599-4f0c-8da9-3144cc5be6de'
  ),
  -- USA-1
  (
    '2214870d-ccb5-479d-b6d0-2d7fb5692857',
    'usa-1',
    'f6a680ee-6d6e-4c42-a99d-15e575c32c20',
    'eec0b2bb-4fbd-46df-b905-8d2ee2fb991a'
  );
