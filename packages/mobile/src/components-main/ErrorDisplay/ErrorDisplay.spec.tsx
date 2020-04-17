import React from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import { shallow, ShallowWrapper } from 'enzyme';
import { Toast } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  Toast: () => 'Toast'
}));
jest.mock('../../components-elements', () => ({
  TextLarge: () => 'TextLarge'
}));

describe('<ErrorDisplay />', () => {
  let wrapper: ShallowWrapper;
  let mockHideErrorDisplay: jest.Mock;

  beforeEach(() => {
    mockHideErrorDisplay = jest.fn();
    wrapper = shallow(
      <ErrorDisplay
        hideErrorDisplay={mockHideErrorDisplay}
        isVisible={true}/>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('clicking close button causes it to hide', () => {
    const onClose = wrapper.find(Toast).first().props().onClose;
    if (onClose) {
      onClose();
    }
    expect(mockHideErrorDisplay).toHaveBeenCalled();
  });
});
