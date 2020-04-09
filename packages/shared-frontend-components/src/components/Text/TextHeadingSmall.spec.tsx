import React from 'react';
import { TextHeadingSmall } from './TextHeadingSmall';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<TextHeadingSmall />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextHeadingSmall
        className='class'>
          Text
      </TextHeadingSmall>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
