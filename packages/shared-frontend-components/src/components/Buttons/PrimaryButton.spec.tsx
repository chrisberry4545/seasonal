import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<PrimaryButton />', () => {
  let wrapper: ShallowWrapper;
  let mockOnClick: jest.Mock;

  beforeEach(() => {
    mockOnClick = jest.fn();
    wrapper = shallow(
      <PrimaryButton onClick={mockOnClick}
        className='class'>
        Button
      </PrimaryButton>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('outputs to onClick when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('can change button type to submit', () => {
    wrapper = shallow(
      <PrimaryButton onClick={mockOnClick}
        type='submit'>
        Button
      </PrimaryButton>
    );
    expect(wrapper.find('button').prop('type')).toBe('submit');
  });

  test('includes data-e2e if specified', () => {
    wrapper = shallow(
      <PrimaryButton onClick={mockOnClick}
        data-e2e='data-e2e-test'>
        Button
      </PrimaryButton>
    );
    expect(wrapper.find('button').prop('data-e2e')).toBe('data-e2e-test');
  });
});
