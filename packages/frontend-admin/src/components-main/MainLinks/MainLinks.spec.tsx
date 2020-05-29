import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { MainLinks } from './MainLinks';

jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingSmall: () => 'TextHeadingSmall',
  TextMedium: () => 'TextMedium'
}));

describe('MainLinks', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <MainLinks />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
