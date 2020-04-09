import React from 'react';
import { TextMedium } from './TextMedium';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<TextMedium />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextMedium
        className='class'>
          Text
      </TextMedium>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
