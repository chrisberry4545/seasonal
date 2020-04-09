import React from 'react';
import { BareButton } from './BareButton';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<BareButton />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <BareButton onClick={mockOnClick}
        className='class'>
        Button
      </BareButton>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('outputs to onClick when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('can change button type to submit', () => {
    wrapper = shallow(
      <BareButton onClick={mockOnClick}
        type='submit'>
        Button
      </BareButton>
    );
    expect(wrapper.find('button').prop('type')).toBe('submit');
  });

  test('includes data-e2e if specified', () => {
    wrapper = shallow(
      <BareButton onClick={mockOnClick}
        data-e2e='data-e2e-test'>
        Button
      </BareButton>
    );
    expect(wrapper.find('button').prop('data-e2e')).toBe('data-e2e-test');
  });
});
