WITH
  food_name_mappings AS (
		SELECT
      country_to_food_name_map.food_id,
      country_to_food_name_map.name
		FROM country_to_food_name_map
		WHERE $3 = ANY(country_to_food_name_map.languages)
    OR country_to_food_name_map.country_id = ANY(
        SELECT
          regions.country_id
        FROM
          regions
        WHERE
          regions.code = $1
      )
	  )

SELECT
  COALESCE(
		(
		  SELECT translations_badge_name.name
		  FROM translations_badge_name
		  WHERE translations_badge_name.badge_id = badges.id
			AND $3 = ANY(translations_badge_name.languages)
			LIMIT 1
		),
    badges.name
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
            ),
            food.name
          ),
          'imageUrlSmall', food.image_url_small
        )
        ORDER BY COALESCE(
          (
            SELECT food_name_mappings.name FROM food_name_mappings
            WHERE food_name_mappings.food_id = food.id
          ),
          food.name
        )
      ),
      '[]'::json
    ) AS food
    FROM food
    WHERE
      badges.id = ANY(food.badge_ids)
  )
FROM badges
WHERE badges.id = $2;
