WITH
  all_food AS (
    SELECT * FROM food
  ),
  all_countries AS (
    SELECT * FROM countries
  )

SELECT
  id,
  (
    SELECT(
      json_build_object(
        'id', all_countries.id,
        'name', all_countries.name
      )
    ) AS country
    FROM all_countries
    WHERE all_countries.id = country_to_food_name_map.country_id
  ),
  (
    SELECT(
      json_build_object(
        'id', all_food.id,
        'name', all_food.name,
        'image_url_small', all_food.image_url_small
      )
    ) AS food
    FROM all_food
    WHERE all_food.id = country_to_food_name_map.food_id
  ),
  name
FROM country_to_food_name_map
WHERE
  $1::uuid is NULL
OR
  id = $1;
