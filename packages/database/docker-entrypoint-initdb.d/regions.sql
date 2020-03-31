DROP TABLE IF EXISTS public.regions;

CREATE TABLE public.regions
(
    code text,
    name text,
    country_id uuid,
    lat numeric,
    lng numeric,
    is_disabled boolean
);

INSERT INTO public.regions (
  code,
  name,
  country_id,
  lat,
  lng,
  is_disabled
)
VALUES
  (
    'gbr',
    'UK',
    '1fc52423-eb83-4cd9-9fdd-b6f9cb323c37',
    50,
    50,
    FALSE
  ),
  (
    'usa-1',
    'USA',
    'd6e57673-eee8-444a-b7be-d9ab553052cf',
    -50,
    -50,
    FALSE
  ),
  (
    'region_is_disabled',
    'Region set to disabled',
    '2168cb5e-a2e9-4bf6-b50d-95ad6a79227c',
    -25,
    -25,
    TRUE
  );
