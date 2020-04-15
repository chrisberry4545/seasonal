import React from 'react';
import { ModalLayout } from './ModalLayout';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  CrossIcon: () => 'CrossIcon'
}));

describe('<ModalLayout />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClose: jest.Mock;

  beforeEach(() => {
    mockOnClose = jest.fn();
    wrapper = shallow(
      <ModalLayout
        isVisible={true}
        onClose={mockOnClose}>
        Child
      </ModalLayout>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when the close button is clicked', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('calls onClose', () => expect(mockOnClose).toHaveBeenCalled());
  });

  describe('if the modal cannot be closed', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ModalLayout
          isVisible={true}>
          Child
        </ModalLayout>
      );
    });

    test('do not show the close button', () =>
      expect(wrapper.find(BareButton).exists()).toBe(false));
  });
});
