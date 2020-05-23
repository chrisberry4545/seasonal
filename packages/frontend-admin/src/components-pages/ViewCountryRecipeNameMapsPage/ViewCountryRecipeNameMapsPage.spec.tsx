import React from 'react';
import { ViewCountryRecipeNameMapsPage } from './ViewCountryRecipeNameMapsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListCountryRecipeNameMaps: () => 'FullListCountryRecipeNameMaps'
}));

describe('<ViewCountryRecipeNameMapsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewCountryRecipeNameMapsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
