import React from 'react';
import { RadioButton } from './RadioButton';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../Buttons';

jest.mock('../Buttons', () => ({
  BareButton: () => 'BareButton'
}));
jest.mock('../Text', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<RadioButton />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClicked: jest.Mock;

  beforeEach(() => {
    mockOnClicked = jest.fn();
    wrapper = shallow(
      <RadioButton
        isSelected={false}
        label='Radio button test'
        onClick={mockOnClicked} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('Responds when an option is clicked', () => {
    const onClickProp = wrapper.find(BareButton).props().onClick;
    if (onClickProp) {
      onClickProp();
    }
    expect(mockOnClicked).toHaveBeenCalled();
  });
});
