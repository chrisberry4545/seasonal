import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SeasonNameView } from '../SeasonNameView/SeasonNameView';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingSmall: () => 'TextHeadingSmall'
}));

describe('<SeasonNameView />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <SeasonNameView
        name='January' />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
