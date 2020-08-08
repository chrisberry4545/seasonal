import i18n from 'i18n-js';

export const getFoodAndRecipeTabTranslations = (): {
  foodTabLabel: string;
  recipeTabLabel: string;
} => ({
  foodTabLabel: i18n.t('foodTab'),
  recipeTabLabel: i18n.t('recipesTab')
});
