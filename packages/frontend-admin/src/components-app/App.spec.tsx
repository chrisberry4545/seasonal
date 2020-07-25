import React from 'react';
import { App } from './App';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../components-layouts', () => ({
  MainPageLayout: () => 'MainPageLayout'
}));
jest.mock('../components-pages', () => ({
  CreateBadgePage: () => 'CreateBadgePage',
  CreateCountryFoodNameMapPage: () => 'CreateCountryFoodNameMapPage',
  CreateCountryPage: () => 'CreateCountryPage',
  CreateCountryRecipeNameMapPage: () => 'CreateCountryRecipeNameMapPage',
  CreateFoodPage: () => 'CreateFoodPage',
  CreateRecipePage: () => 'CreateRecipePage',
  CreateRegionPage: () => 'CreateRegionPage',
  CreateTranslationsCountryNamePage: () => 'CreateTranslationsCountryNamePage',
  CreateUserPage: () => 'CreateUserPage',
  EditBadgePage: () => 'EditBadgePage',
  EditCountryFoodNameMapPage: () => 'EditCountryFoodNameMapPage',
  EditCountryPage: () => 'EditCountryPage',
  EditCountryRecipeNameMapPage: () => 'EditCountryRecipeNameMapPage',
  EditFoodPage: () => 'EditFoodPage',
  EditRecipePage: () => 'EditRecipePage',
  EditRegionFoodSeasonMapPage: () => 'EditRegionFoodSeasonMapPage',
  EditRegionPage: () => 'EditRegionPage',
  EditTranslationsCountryNamePage: () => 'EditTranslationsCountryNamePage',
  EditUserPage: () => 'EditUserPage',
  HomePage: () => 'HomePage',
  LoginPage: () => 'LoginPage',
  ReportFoodWithNoRecipesPage: () => 'ReportFoodWithNoRecipesPage',
  ViewBadgesPage: () => 'ViewBadgesPage',
  ViewCountriesPage: () => 'ViewCountriesPage',
  ViewCountryFoodNameMapsPage: () => 'ViewCountryFoodNameMapsPage',
  ViewCountryRecipeNameMapsPage: () => 'ViewCountryRecipeNameMapsPage',
  ViewFoodPage: () => 'ViewFoodPage',
  ViewRecipesPage: () => 'ViewRecipesPage',
  ViewRegionsPage: () => 'ViewRegionsPage',
  ViewTranslationsCountryNamesPage: () => 'ViewTranslationsCountryNamesPage',
  ViewUsersPage: () => 'ViewUsersPage'
}));

describe('<App />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <App />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
