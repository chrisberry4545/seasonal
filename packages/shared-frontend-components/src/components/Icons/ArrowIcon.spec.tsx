import React from 'react';
import { ArrowIcon } from './ArrowIcon';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<ArrowIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ArrowIcon className='class' />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
