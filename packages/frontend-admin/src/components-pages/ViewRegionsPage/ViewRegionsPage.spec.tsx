import React from 'react';
import { ViewRegionsPage } from './ViewRegionsPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListRegions: () => 'FullListRegions'
}));

describe('<ViewRegionsPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewRegionsPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
