import React from 'react';
import { SettingsBackButton } from './SettingsBackButton';
import { shallow, ShallowWrapper } from 'enzyme';
import { BackArrowIconButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BackArrowIconButton: () => 'BackArrowIconButton'
}));

describe('<SettingsBackButton />', () => {
  let wrapper: ShallowWrapper;
  let mockOnGoBack: jest.Mock;

  beforeEach(() => {
    mockOnGoBack = jest.fn();
    wrapper = shallow(
      <SettingsBackButton
        onGoBack={mockOnGoBack} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can click the go back button', () => {
    const onClick = wrapper.find(BackArrowIconButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnGoBack).toHaveBeenCalled();
  });

});
