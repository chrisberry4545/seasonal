import React from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { shallow, ShallowWrapper } from 'enzyme';
import { RadioButton } from './RadioButton';

jest.mock('./RadioButton', () => ({
  RadioButton: () => 'RadioButton'
}));

describe('<RadioButtonGroup />', () => {
  let wrapper: ShallowWrapper;
  let mockOnChange: jest.Mock;
  const radioButtons: Array<{
    label: string,
    value: string
  }> = [
    {
      label: 'l1',
      value: 'v1'
    },
    {
      label: 'l2',
      value: 'v2'
    }
  ];

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  describe('when no values are selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <RadioButtonGroup onChange={mockOnChange}
          className='class'
          radioButtonClassName='radio-button-class'
          groupName='test-group'
          radioButtons={radioButtons} />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('outputs the value when changed', () => {
      wrapper.find('div').simulate('change', { target: { value: 'new-val' } });
      expect(mockOnChange).toHaveBeenCalledWith('new-val');
    });
  });

  describe('when a value is selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <RadioButtonGroup onChange={mockOnChange}
          className='class'
          radioButtonClassName='radio-button-class'
          groupName='test-group'
          radioButtons={radioButtons}
          selectedValue={radioButtons[0].value} />
      );
    });

    test('defaults to checked if the selected value matches the radio button value', () =>
      expect(wrapper.find(RadioButton).first().prop('defaultToChecked'))
        .toBe(true));

    test('does not defaults to checked if the selected value does not matches the radio button value', () =>
      expect(wrapper.find(RadioButton).last().prop('defaultToChecked'))
        .toBe(false));
  });

});
