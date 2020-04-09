import React from 'react';
import { ValidationMessage } from './ValidationMessage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../Text', () => ({
  TextMedium: () => 'TextMedium'
}));

describe('<ValidationMessage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ValidationMessage className='class'>
        Validation Message
      </ValidationMessage>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
