SELECT
  id,
  season_index,
  COALESCE(
		(
		  SELECT translations_season_name.name
		  FROM translations_season_name
		  WHERE translations_season_name.season_id = seasons.id
			AND $1 = ANY(translations_season_name.languages)
			LIMIT 1
		),
    seasons.name
	) AS name
FROM seasons;
