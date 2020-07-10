import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const enTranslations = {
  no: 'No',
  notNow: 'Not now',
  yes: 'Yes',

  foodBadgesTitle: 'Nutrients',

  recipesForFoodTitle: 'Recipes',

  seasonsForFoodKeyInSeason: 'In season',
  seasonsForFoodKeyNotInSeason: 'Not in season',
  seasonsForFoodTitle: 'When are they in season?',

  foodForBadgeFoundIn: 'Found in',

  dietFiltersAll: 'All',
  dietFiltersVegan: 'Vegan',
  dietFiltersVegetarian: 'Vegetarian',

  foodTab: 'Food',
  recipesTab: 'Recipes',

  gridView: 'Grid view',
  listView: 'List view',

  menuAboutUs: 'About us',
  menuAllSeasons: 'All seasons',
  menuChangeRegion: 'Change region',
  menuGiveFeedback: 'Give feedback',

  searchBarPlaceholder: 'Search',

  privacyPolicyTitle: 'Privacy Policy',

  feedbackDoYouLikeTheAppQuestion: 'Is Eat Seasonal useful?',
  feedbackImprovementQuestion: 'We\'d love to hear feedback on how we could improve',
  feedbackImprovementsPlaceholder: 'Your feedback',
  feedbackRateOnStoreQuestion: 'Rating the app will help other people find the app'
    + ' and start eating seasonally',
  feedbackRateOnStoreQuestionTitle: 'Help others Eat Seasonal',
  feedbackRateTheApp: 'Rate the app',
  feedbackSend: 'Send feedback',

  selectYourRegion: 'Select your region'

};

export const initLocalization = () => {
  i18n.translations = {
    en: enTranslations
  };
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
};
