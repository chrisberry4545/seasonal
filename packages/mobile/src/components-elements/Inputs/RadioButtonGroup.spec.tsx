import React from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import { shallow, ShallowWrapper } from 'enzyme';
import { RadioButton } from './RadioButton';

jest.mock('./RadioButton', () => ({
  RadioButton: () => 'RadioButton'
}));

describe('<Input />', () => {
  let wrapper: ShallowWrapper;
  let mockOnChanged: jest.Mock;

  beforeEach(() => {
    mockOnChanged = jest.fn();
    wrapper = shallow(
      <RadioButtonGroup
        radioButtons={[
          {
            label: 'l1',
            value: 'v1'
          },
          {
            label: 'l2',
            value: 'v2'
          }
        ]}
        selectedValue='v2'
        style={{ backgroundColor: '#000000' }}
        onChange={mockOnChanged} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('Calls onChange when the value is changed', () => {
    const onClickProp = wrapper.find(RadioButton).first().props().onClick;
    if (onClickProp) {
      onClickProp();
    }
    expect(mockOnChanged).toHaveBeenCalled();
  });
});
