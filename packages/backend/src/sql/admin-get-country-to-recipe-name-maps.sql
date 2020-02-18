WITH
  all_recipes AS (
    SELECT * FROM recipes
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
    WHERE all_countries.id = country_to_recipe_name_map.country_id
  ),
  (
    SELECT(
      json_build_object(
        'id', all_recipes.id,
        'name', all_recipes.name,
        'image_url_small', all_recipes.image_url_small
      )
    ) AS recipe
    FROM all_recipes
    WHERE all_recipes.id = country_to_recipe_name_map.recipe_id
  ),
  name
FROM country_to_recipe_name_map
WHERE
  $1::uuid is NULL
OR
  id = $1;
