import React from 'react';
import { FoodDetailsPage } from './FoodDetailsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native-gesture-handler', () => ({
  ScrollView: () => 'ScrollView'
}));

jest.mock('../../components-main', () => ({
  FoodBadgesConnecter: () => 'FoodBadgesConnecter',
  FoodDetailsLoaderConnecter: () => 'FoodDetailsLoaderConnecter',
  FoodDetailsTopSectionConnecter: () => 'FoodDetailsTopSectionConnecter',
  HeaderConnecter: () => 'HeaderConnecter',
  RecipesForFoodConnecter: () => 'RecipesForFoodConnecter',
  SeasonsForFoodConnecter: () => 'SeasonsForFoodConnecter'
}));

jest.mock('../../components-layout', () => ({
  DefaultPaddingContainer: () => 'DefaultPaddingContainer',
  DetailsPageLayout: () => 'DetailsPageLayout',
  MainContainer: () => 'MainContainer'
}));

describe('<FoodDetailsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FoodDetailsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
