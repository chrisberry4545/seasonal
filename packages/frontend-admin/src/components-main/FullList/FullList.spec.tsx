
import React from 'react';
import { FullList } from './FullList';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { DeleteModal } from '../DeleteModal/DeleteModal';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  TextMedium: () => 'TextMedium',
  TextSmall: () => 'TextSmall'
}));
jest.mock('../DeleteModal/DeleteModal', () => ({
  DeleteModal: () => 'DeleteModal'
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));

describe('<FullList />', () => {
  let wrapper: ShallowWrapper;
  let mockGetItemId: jest.Mock;
  let mockGetItemName: jest.Mock;
  let mockGetItemEditUrl: jest.Mock;
  let mockDelete: jest.Mock;
  const items = [{}, {}];

  beforeEach(() => {
    mockGetItemId = jest.fn().mockReturnValue('id');
    mockGetItemName = jest.fn().mockReturnValue('name');
    mockGetItemEditUrl = jest.fn().mockReturnValue('edit-url');
    mockDelete = jest.fn();
    wrapper = shallow(
      <FullList
        title='Title'
        items={items}
        getItemId={mockGetItemId}
        getItemName={mockGetItemName}
        getItemEditUrl={mockGetItemEditUrl}
        deleteItemFunc={mockDelete} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can click edit', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockGetItemEditUrl).toHaveBeenCalled();
  });

  describe('when editing an item', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('redirects to the edit url', () => expect(wrapper).toMatchSnapshot());

  });

  describe('when deleting the item', () => {
    beforeEach(() => {
      const onClick = wrapper.find(BareButton).last().props().onClick;
      if (onClick) {
        onClick();
      }
    });

    test('shows a delete confirmation modal', () =>
      expect(wrapper.find(DeleteModal).exists()).toBe(true));

    test('can close the modal', () => {
      wrapper.find(DeleteModal).first().props().cancel();
      expect(wrapper.find(DeleteModal).exists()).toBe(false);
    });

    test('can delete the item', () => {
      wrapper.find(DeleteModal).first().props().deleteItem();
      expect(mockDelete).toHaveBeenCalledWith(items[0]);
    });

  });

});
