import React from 'react';
import { ViewCountriesPage } from './ViewCountriesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListCountries: () => 'FullListCountries'
}));

describe('<ViewCountriesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewCountriesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
