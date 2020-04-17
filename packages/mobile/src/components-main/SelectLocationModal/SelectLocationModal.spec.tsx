import React from 'react';
import { SelectLocationModal } from './SelectLocationModal';
import { shallow, ShallowWrapper } from 'enzyme';
import { ModalLayout } from '../../components-layout';

jest.mock('../SelectLocation/SelectLocation.connector', () => ({
  SelectLocationConnecter: () => 'SelectLocationConnecter'
}));
jest.mock('../../components-layout', () => ({
  ModalLayout: () => 'ModalLayout'
}));

describe('<SelectLocationModal />', () => {
  let wrapper: ShallowWrapper;
  let mockCloseLocationPopup: jest.Mock;

  beforeEach(() => {
    mockCloseLocationPopup = jest.fn();
    wrapper = shallow(
      <SelectLocationModal
        isVisible={false}
        closeLocationPopup={mockCloseLocationPopup} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can close the popup', () => {
    const onClose = wrapper.find(ModalLayout).first().props().onClose;
    if (onClose) {
      onClose();
    }
    expect(mockCloseLocationPopup).toHaveBeenCalled();
  });

});
