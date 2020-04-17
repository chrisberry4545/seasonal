import React from 'react';
import { View } from 'react-native';
import { Toast } from './Toast';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  CrossIcon: () => 'CrossIcon'
}));

describe('<Toast />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClose: jest.Mock;

  beforeEach(() => {
    mockOnClose = jest.fn();
    wrapper = shallow(
      <Toast
        onClose={mockOnClose}
        isVisible={true}
        type='info'
      >
        Children
      </Toast>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can be closed', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnClose).toHaveBeenCalled();
  });

  describe('if isVisible is false', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Toast
          onClose={mockOnClose}
          isVisible={false}
          type='info'
        >
          Children
        </Toast>
      );
    });

    test('does not display anything', () =>
      expect(wrapper.find(View).exists()).toBe(false));

  });

  describe('if there is no onClose function', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Toast
          isVisible={false}
          type='info'
        >
          Children
        </Toast>
      );
    });

    test('there is no close button', () =>
      expect(wrapper.find(BareButton).exists()).toBe(false));

  });

  describe('when the type is error', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Toast
          isVisible={true}
          type='error'
        >
          Children
        </Toast>
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });
});
