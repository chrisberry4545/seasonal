import React from 'react';
import { BareButton } from './BareButton';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  TouchableOpacity: () => 'TouchableOpacity'
}));

describe('<BareButton />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <BareButton onClick={mockOnClick}
        activeOpacity={0.5} style={{ color: 'blue' }}>
        Button
      </BareButton>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
