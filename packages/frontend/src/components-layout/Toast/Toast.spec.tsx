import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Toast } from '../Toast/Toast';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  CrossIcon: () => 'CrossIcon'
}));

describe('<Toast />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClose: jest.Mock;

  const getOnCloseButton = () =>
    wrapper.find(BareButton).first();

  beforeEach(() =>
    mockOnClose = jest.fn()
  );

  describe('when the toast is visible', () => {
    beforeEach(() =>
      wrapper = shallow(
        <Toast
          onClose={mockOnClose}
          isVisible={true}>
            Children
        </Toast>
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can close the toast', () => {
      const onClick = getOnCloseButton().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnClose).toHaveBeenCalled();
    });

  });

  describe('when there is no onClose function', () => {
    beforeEach(() =>
      wrapper = shallow(
        <Toast
          isVisible={true}>
            Children
        </Toast>
      )
    );

    test('do not show the close button', () =>
      expect(getOnCloseButton().exists()).toBe(false));

  });

  describe('when the toast is not visible', () => {
    beforeEach(() =>
      wrapper = shallow(
        <Toast
          isVisible={false} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));

  });

});
