import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodDetailsPage } from './FoodDetailsPage';

jest.mock('../../components-main', () => ({
  FoodBadgesConnecter: () => 'FoodBadgesConnecter',
  FoodDetailsLoaderConnecter: () => 'FoodDetailsLoaderConnecter',
  FoodDetailsTopSectionConnecter: () => 'FoodDetailsTopSectionConnecter',
  PageWithMenu: () => 'PageWithMenu',
  RecipesForFoodConnecter: () => 'RecipesForFoodConnecter',
  SeasonsForFoodConnecter: () => 'SeasonsForFoodConnecter'
}));
jest.mock('../../components-layout', () => ({
  DetailsPageLayout: () => 'DetailsPageLayout'
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
