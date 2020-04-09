import React from 'react';
import { RadioButton } from './RadioButton';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<RadioButton />', () => {
  let wrapper: ShallowWrapper;

  describe('when the radio button is not selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <RadioButton data-e2e='e2e-test'
          className='class'
          defaultToChecked={false}
          groupName='test-group'
          value='test-value'
          label='test-label' />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when the radio button is defaulted to selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <RadioButton data-e2e='e2e-test'
          className='class'
          defaultToChecked={true}
          groupName='test-group'
          value='test-value'
          label='test-label' />
      );
    });

    test('sets the correct class', () =>
      expect(wrapper.find('label')
        .hasClass('c-radio-button--selected')).toBe(true));

    test('defaults to selected', () =>
      expect(wrapper.find('input').prop('defaultChecked')).toBe(true));
  });

});
