DROP TABLE IF EXISTS public.seasons;

CREATE TABLE public.seasons
(
  id uuid NOT NULL DEFAULT uuid_generate_v1(),
  season_index numeric,
  name text
);

INSERT INTO public.seasons (
  id,
  season_index,
  name
)
VALUES
  (
    '41bcbb3a-5599-4f0c-8da9-3144cc5be6de',
    0,
    'January'
  ),
  (
    'eec0b2bb-4fbd-46df-b905-8d2ee2fb991a',
    1,
    'February'
  ),
  (
    'f4812071-b0e2-4255-8ccf-e38768ad0c3c',
    2,
    'March'
  ),
  (
    'a4812071-b0e2-4255-8ccf-e38768ad0c3c',
    3,
    'April'
  ),
  (
    'b4812071-b0e2-4255-8ccf-e38768ad0c3c',
    4,
    'May'
  ),
  (
    'c4812071-b0e2-4255-8ccf-e38768ad0c3c',
    5,
    'June'
  ),
  (
    'd4812071-b0e2-4255-8ccf-e38768ad0c3c',
    6,
    'July'
  ),
  (
    'e4812071-b0e2-4255-8ccf-e38768ad0c3c',
    7,
    'August'
  ),
  (
    'f5812071-b0e2-4255-8ccf-e38768ad0c3c',
    8,
    'September'
  ),
  (
    'a1812071-b0e2-4255-8ccf-e38768ad0c3c',
    9,
    'October'
  ),
  (
    'b1812071-b0e2-4255-8ccf-e38768ad0c3c',
    10,
    'November'
  ),
  (
    'c1812071-b0e2-4255-8ccf-e38768ad0c3c',
    11,
    'December'
  );
