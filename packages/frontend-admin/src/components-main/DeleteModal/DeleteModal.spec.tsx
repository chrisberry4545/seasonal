
import React from 'react';
import { DeleteModal } from './DeleteModal';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton, LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  LoadingSpinner: () => 'LoadingSpinner',
  TextMedium: () => 'TextMedium',
  TextSmall: () => 'TextSmall'
}));
jest.mock('../../components-layouts', () => ({
  ModalLayout: () => 'ModalLayout'
}));

describe('<DeleteModal />', () => {
  let wrapper: ShallowWrapper;
  let mockDelete: jest.Mock;
  let mockCancel: jest.Mock;
  let mockResolveDelete: () => void;

  beforeEach(() => {
    mockDelete = jest.fn().mockReturnValue(new Promise((resolve) => {
      mockResolveDelete = resolve;
    }));
    mockCancel = jest.fn();
    wrapper = shallow(
      <DeleteModal deleteItem={mockDelete} cancel={mockCancel} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can cancel the modal', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockCancel).toHaveBeenCalled();
  });

  describe('when deleting the item', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BareButton).last().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('can delete the modal item', () =>
      expect(mockDelete).toHaveBeenCalled());

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

    describe('when the delete function resolves', () => {
      beforeEach(() => mockResolveDelete());

      test('hides the loading spinner', () =>
        expect(wrapper.find(LoadingSpinner).exists()).toBe(false));
    });

  });

});
