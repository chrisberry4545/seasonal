import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
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
  menuChangeRegion: 'Change region or language',
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

  regionChangedDetectedYourClosestRegionAs: `We've detected your closest region as:`,
  regionChangedIfThisIsWrongClickHere: 'If this is wrong, click here.',

  selectYourLanguage: 'Select your language',
  selectYourRegion: 'Select your region'

};

i18n.translations = {
  en: enTranslations
};

Enzyme.configure({ adapter: new Adapter() });
