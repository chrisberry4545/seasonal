import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IntroPage } from '../IntroPage/IntroPage';

jest.mock('../../components-main', () => ({
  AboutEatSeasonal: () => 'AboutEatSeasonal',
  ViewAppLinks: () => 'ViewAppLinks',
  WhyEatSeasonal: () => 'WhyEatSeasonal'
}));

describe('<IntroPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <IntroPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
