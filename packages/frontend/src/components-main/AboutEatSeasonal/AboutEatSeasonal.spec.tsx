import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AboutEatSeasonal } from '../AboutEatSeasonal/AboutEatSeasonal';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingLarge: () => 'TextHeadingLarge',
  TextMedium: () => 'TextMedium'
}));

describe('<AboutEatSeasonal />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AboutEatSeasonal />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
