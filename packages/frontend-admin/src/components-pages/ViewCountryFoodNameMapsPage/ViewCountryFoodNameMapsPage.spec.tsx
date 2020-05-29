import React from 'react';
import { ViewCountryFoodNameMapsPage } from './ViewCountryFoodNameMapsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListCountryFoodNameMaps: () => 'FullListCountryFoodNameMaps'
}));

describe('<ViewCountryFoodNameMapsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewCountryFoodNameMapsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
