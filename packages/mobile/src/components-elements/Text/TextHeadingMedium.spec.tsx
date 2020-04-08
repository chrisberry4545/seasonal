import React from 'react';
import { TextHeadingMedium } from './TextHeadingMedium';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  Text: () => 'Text'
}));

describe('<TextHeadingMedium />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextHeadingMedium
        style={{ color: '#000000' }}>
          Text
      </TextHeadingMedium>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
