
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ErrorDisplay } from './ErrorDisplay';
import { Toast } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  Toast: () => 'Toast'
}));

describe('<ErrorDisplay />', () => {
  let wrapper: ShallowWrapper;
  let mockHideErrorDisplay: jest.Mock;

  beforeEach(() => {
    mockHideErrorDisplay = jest.fn();
    wrapper = shallow(
      <ErrorDisplay
        isVisible={true}
        hideErrorDisplay={mockHideErrorDisplay} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can close the error warning', () => {
    const onClose = wrapper.find(Toast).props().onClose;
    if (onClose) {
      onClose();
    }
    expect(mockHideErrorDisplay).toHaveBeenCalled();
  });

});
