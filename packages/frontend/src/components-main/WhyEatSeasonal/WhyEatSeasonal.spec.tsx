
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { WhyEatSeasonal } from './WhyEatSeasonal';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingLarge: () => 'TextHeadingLarge'
}));
jest.mock('../../components-layout', () => ({
  SummaryColumnList: () => 'SummaryColumnList'
}));

describe('<WhyEatSeasonal />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
       <WhyEatSeasonal />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
