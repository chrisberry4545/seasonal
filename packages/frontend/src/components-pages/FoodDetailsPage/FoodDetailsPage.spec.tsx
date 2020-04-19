import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodDetailsPage } from '../FoodDetailsPage/FoodDetailsPage';

jest.mock('../../components-main', () => ({
  FoodDetailsLoaderConnecter: () => 'FoodDetailsLoaderConnecter',
  FoodDetailsTopSectionConnecter: () => 'FoodDetailsTopSectionConnecter',
  PageWithMenu: () => 'PageWithMenu',
  RecipesForFoodConnecter: () => 'RecipesForFoodConnecter',
  SeasonsForFoodConnecter: () => 'SeasonsForFoodConnecter'
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
