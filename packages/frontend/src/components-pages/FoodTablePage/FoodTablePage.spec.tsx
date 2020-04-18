import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodTablePage } from '../FoodTablePage/FoodTablePage';

jest.mock('../../components-main', () => ({
  BottomTabsConnecter: () => 'BottomTabsConnecter',
  CurrentSeasonNameConnecter: () => 'CurrentSeasonNameConnecter',
  FoodTableConnecter: () => 'FoodTableConnecter',
  PageWithMenu: () => 'PageWithMenu',
  RecipeTableConnecter: () => 'RecipeTableConnecter'
}));

describe('<FoodTablePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FoodTablePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
