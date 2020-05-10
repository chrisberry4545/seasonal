import React from 'react';
import { AllSeasonsPage } from './AllSeasonsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  AllSeasonsFoodConnector: () => 'AllSeasonsFoodConnector',
  AllSeasonsRecipesConnector: () => 'AllSeasonsRecipesConnector'
}));

jest.mock('../../components-layout', () => ({
  FoodAndRecipeTabs: () => 'FoodAndRecipeTabs'
}));

describe('<AllSeasonsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AllSeasonsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
