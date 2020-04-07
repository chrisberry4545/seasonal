import React from 'react';
import { TextMedium } from './TextMedium';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  Text: () => 'Text'
}));

describe('<TextMedium />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextMedium
        style={{ color: '#000000' }}>
          Text
      </TextMedium>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
