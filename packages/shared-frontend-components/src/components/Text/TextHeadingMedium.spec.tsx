import React from 'react';
import { TextHeadingMedium } from './TextHeadingMedium';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<TextHeadingMedium />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextHeadingMedium
        className='class'>
          Text
      </TextHeadingMedium>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
