SELECT
	food.id,
	food.name,
	food.substitute_food_ids,
	food.image_url_small,
	food.description, badge_ids
FROM food
LEFT JOIN recipes ON food.id = ANY(recipes.primary_food_in_recipe_ids)
WHERE recipes.name is NULL
ORDER BY food.name;
