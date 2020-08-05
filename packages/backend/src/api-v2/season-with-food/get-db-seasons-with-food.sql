WITH
	food_name_mappings AS (
		SELECT
      country_to_food_name_map.food_id,
      country_to_food_name_map.name
		FROM country_to_food_name_map
		WHERE $3 = ANY(country_to_food_name_map.languages)
    OR (
      $3::text is NULL
      AND
      country_to_food_name_map.country_id = ANY(
        SELECT
          regions.country_id
        FROM
          regions
        WHERE
          regions.code = $1
      )
    )
	)

SELECT
  id,
  season_index,
  name,
  food
  FROM (
    SELECT
      seasons.id,
      seasons.season_index,
      COALESCE(
        (
          SELECT translations_season_name.name
          FROM translations_season_name
          WHERE translations_season_name.season_id = seasons.id
          AND $3 = ANY(translations_season_name.languages)
          LIMIT 1
        ),
        seasons.name
      ) AS name,
      (
        SELECT COALESCE(
          json_agg(
            json_build_object(
              'id', food.id,
              'name' , COALESCE(
                (
                  SELECT food_name_mappings.name FROM food_name_mappings
                  WHERE food_name_mappings.food_id = food.id
                  LIMIT 1
                ),
                food.name
              ),
              'imageUrlSmall', food.image_url_small
            )
            ORDER BY COALESCE(
              (
                SELECT food_name_mappings.name FROM food_name_mappings
                WHERE food_name_mappings.food_id = food.id
                LIMIT 1
              ),
              food.name
            )
          ),
          '[]'::json
         ) AS food
        FROM food
        LEFT JOIN region_to_season_food_map
        ON
          region_to_season_food_map.food_id = food.id
        WHERE
          region_to_season_food_map.region_id = $1
        AND
          seasons.id = region_to_season_food_map.season_id
      )
  FROM seasons
  WHERE
    $2::int is NULL
  OR
    seasons.season_index = $2
) seasons;
