WITH
  current_country AS (
    SELECT
      regions.country_id
    FROM
      regions
    WHERE
      regions.code = $1
  ),
	food_name_mappings AS (
		SELECT
      country_to_food_name_map.name
		FROM country_to_food_name_map
		WHERE $3 = ANY(country_to_food_name_map.languages)
    OR (
      country_to_food_name_map.country_id = ANY(SELECT country_id FROM current_country)
      AND
      country_to_food_name_map.food_id = $2
    )
	),
  recipe_name_mapping AS (
    SELECT
      country_to_recipe_name_map.name,
      country_to_recipe_name_map.recipe_id
    FROM country_to_recipe_name_map
    WHERE
      $3 = ANY(country_to_recipe_name_map.languages)
    OR
      country_to_recipe_name_map.country_id = ANY(SELECT country_id FROM current_country)

  ),
  parent_foods AS (
    SELECT food.id
    FROM food
	  WHERE
		  $2 = ANY(food.substitute_food_ids)
  )

SELECT
  food.id,
  COALESCE((SELECT name FROM food_name_mappings), food.name) AS name,
  food.image_url_small,
  (
    SELECT COALESCE(
      json_agg(
        json_build_object(
          'id' , recipes.id,
          'name', COALESCE(
              (
                SELECT name
                FROM recipe_name_mapping
                WHERE recipe_name_mapping.recipe_id = recipes.id
              ),
              recipes.name
          ),
          'linkUrl', recipes.link_url,
          'imageUrlSmall', recipes.image_url_small,
          'isVegan', recipes.is_vegan,
          'isVegetarian', recipes.is_vegetarian
        )
      ),
      '[]'::json
    ) AS primary_food_in_recipe
    FROM recipes
    WHERE
      food.id = ANY(recipes.primary_food_in_recipe_ids)
    OR
      (SELECT id FROM parent_foods) = ANY(recipes.primary_food_in_recipe_ids)
  ),
  (
    SELECT COALESCE(
      json_agg(
        json_build_object(
          'id' , recipes.id,
          'name', COALESCE(
              (
                SELECT name
                FROM recipe_name_mapping
                WHERE recipe_name_mapping.recipe_id = recipes.id
              ),
              recipes.name
          ),
          'linkUrl', recipes.link_url,
          'imageUrlSmall', recipes.image_url_small,
          'isVegan', recipes.is_vegan,
          'isVegetarian', recipes.is_vegetarian
        )
      ),
      '[]'::json
    ) AS secondary_food_in_recipe
    FROM recipes
    WHERE
      food.id = ANY(recipes.secondary_food_in_recipe_ids)
    OR
      (SELECT id FROM parent_foods) = ANY(recipes.secondary_food_in_recipe_ids)
  ),
  (
    SELECT COALESCE(
      json_agg(
        json_build_object(
          'id', seasons.id,
          'name', seasons.name,
          'seasonIndex', seasons.season_index
        )
      ),
      '[]'::json
    ) as seasons
    FROM seasons
    LEFT JOIN region_to_season_food_map
      ON seasons.id = region_to_season_food_map.season_id
    WHERE
      region_to_season_food_map.food_id = food.id
    AND
      region_to_season_food_map.region_id = $1
  ),
  (
    SELECT COALESCE(
      json_agg(
        json_build_object(
          'id', badges.id,
          'name', badges.name
        )
        ORDER BY(badges.name)
      ),
      '[]'::json
    ) as badges
    FROM badges
    WHERE
      badges.id = ANY(food.badge_ids)
  )
FROM food
WHERE food.id = $2
