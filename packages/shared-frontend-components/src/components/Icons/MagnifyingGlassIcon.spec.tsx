import React from 'react';
import { MagnifyingGlassIcon } from './MagnifyingGlassIcon';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<MagnifyingGlassIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<MagnifyingGlassIcon className='class' />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
