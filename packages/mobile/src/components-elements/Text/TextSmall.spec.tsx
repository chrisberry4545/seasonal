import React from 'react';
import { TextSmall } from './TextSmall';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  Text: () => 'Text'
}));

describe('<TextSmall />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextSmall
        style={{ color: '#000000' }}>
          Text
      </TextSmall>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
