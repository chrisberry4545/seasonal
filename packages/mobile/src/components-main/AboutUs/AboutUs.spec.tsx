import React from 'react';
import { AboutUs } from './AboutUs';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  ScrollView: () => 'ScrollView'
}));
jest.mock('../../components-elements', () => ({
  TextHeadingLarge: () => 'TextHeadingLarge',
  TextLarge: () => 'TextLarge'
}));

describe('<AboutUs />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <AboutUs />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
