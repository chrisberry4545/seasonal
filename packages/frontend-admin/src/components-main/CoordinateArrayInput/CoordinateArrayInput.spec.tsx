import React from 'react';
import { CoordinateArrayInput } from './CoordinateArrayInput';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  Input,
  BareButton
} from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton',
  CrossIcon: () => 'CrossIcon',
  Input: () => 'Input',
  TextMedium: () => 'TextMedium'
}));

describe('<CoordinateArrayInput />', () => {
  let wrapper: ShallowWrapper;
  const value: Array<[number, number]> = [ [1, 1], [2, 2] ];
  let mockOnChange: jest.Mock;

  beforeEach(() => {
    mockOnChange = jest.fn();
    wrapper = shallow(
      <CoordinateArrayInput
        value={value}
        onChange={mockOnChange}
        />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can change the longitude coordinate', () => {
    const onChange = wrapper.find(Input).first().props().onChange;
    if (onChange) {
      onChange('10');
    }
    expect(mockOnChange).toHaveBeenCalledWith([
      [10, 1], [2, 2]
    ]);
  });

  test('can change the latitude coordinate', () => {
    const onChange = wrapper.find(Input).at(1).props().onChange;
    if (onChange) {
      onChange('10');
    }
    expect(mockOnChange).toHaveBeenCalledWith([
      [1, 10], [2, 2]
    ]);
  });

  test('can add a row', () => {
    const onClick = wrapper.find(BareButton).last().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnChange).toHaveBeenCalledWith([
      ...value,
      [0, 0]
    ]);
  });

  test('can delete a row', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnChange).toHaveBeenCalledWith(value.slice(1));
  });

});
