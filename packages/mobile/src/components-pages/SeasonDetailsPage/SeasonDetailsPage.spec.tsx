import React from 'react';
import { SeasonDetailsPage } from './SeasonDetailsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  SeasonFoodConnector: () => 'SeasonFoodConnector',
  SeasonRecipesConnector: () => 'SeasonRecipesConnector'
}));

jest.mock('../../components-layout', () => ({
  FoodAndRecipeTabs: () => 'FoodAndRecipeTabs'
}));

describe('<SeasonDetailsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <SeasonDetailsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
