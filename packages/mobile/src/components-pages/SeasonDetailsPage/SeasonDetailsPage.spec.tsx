import React from 'react';
import { SeasonDetailsPage } from './SeasonDetailsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FoodAndRecipeTabsCurrentSeasonConnector: () => 'FoodAndRecipeTabsCurrentSeasonConnector'
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
