import React from 'react';
import { Input } from './Input';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<Input />', () => {
  let wrapper: ShallowWrapper;
  let mockOnChange: jest.Mock;
  let mockOnKeyDown: jest.Mock;

  beforeEach(() => {
    mockOnChange = jest.fn();
    mockOnKeyDown = jest.fn();
    wrapper = shallow(
      <Input onChange={mockOnChange}
        className='class'
        placeholder='placeholder'
        onKeyDown={mockOnKeyDown}
        value='test-value'
        data-e2e='data-e2e-test' />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('outputs to onChange when value changes', () => {
    wrapper.find('input').simulate('change', { target: { value: 'new-val' } });
    expect(mockOnChange).toHaveBeenCalledWith('new-val');
  });

  test('outputs to onKeyDown when keydown pressed', () => {
    const keyDownEvent = { target: {} };
    wrapper.find('input').simulate('keydown', keyDownEvent);
    expect(mockOnKeyDown).toHaveBeenCalledWith(keyDownEvent);
  });
});
