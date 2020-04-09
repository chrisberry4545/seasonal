import React from 'react';
import { TextSmall } from './TextSmall';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<TextSmall />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextSmall
        className='class'>
          Text
      </TextSmall>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
