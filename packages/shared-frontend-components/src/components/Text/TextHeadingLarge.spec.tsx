import React from 'react';
import { TextHeadingLarge } from './TextHeadingLarge';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<TextHeadingLarge />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextHeadingLarge
        className='class'>
          Text
      </TextHeadingLarge>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
