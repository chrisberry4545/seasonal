SELECT *
FROM (
    SELECT
    countries.id,
    COALESCE(
      (
        SELECT translations_country_name.name
        FROM translations_country_name
        WHERE translations_country_name.country_id = countries.id
        AND $1 = ANY(translations_country_name.languages)
        LIMIT 1
      ),
      countries.name
    ) AS name,
    countries.bounds,
    (
        SELECT COALESCE(
          json_agg(
            json_build_object(
              'id', regions.id,
              'code' , regions.code,
              'name', regions.name,
              'latLng', json_build_object(
                  'lat', regions.lat,
                  'lng', regions.lng
              )
            )
            ORDER BY regions.name
          ),
          '[]'::json
        ) AS regions
        FROM regions
        WHERE regions.country_id = countries.id
        AND regions.is_disabled != TRUE
    )
    FROM countries
    ORDER BY countries.name
) AS result
WHERE json_array_length(result.regions) > 0
