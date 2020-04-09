import React from 'react';
import { Select } from './Select';
import { shallow, ShallowWrapper } from 'enzyme';
import { ISelectOption } from './select-option.interface';

describe('<Select />', () => {
  let wrapper: ShallowWrapper;
  let mockOnChange: jest.Mock;
  const options = [
    {
      label: 'l1',
      value: 'v1'
    },
    {
      label: 'l2',
      value: 'v2'
    }
  ] as ISelectOption[];

  beforeEach(() => {
    mockOnChange = jest.fn();
    wrapper = shallow(
      <Select
        onChange={mockOnChange}
        className='class'
        options={options}
        value={options[0].value} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('outputs the value when changed', () => {
    wrapper.find('select').simulate('change', { target: { value: 'new-val' } });
    expect(mockOnChange).toHaveBeenCalledWith('new-val');
  });
});
