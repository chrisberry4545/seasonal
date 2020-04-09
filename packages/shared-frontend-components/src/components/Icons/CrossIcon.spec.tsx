import React from 'react';
import { CrossIcon } from './CrossIcon';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<CrossIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<CrossIcon className='class' />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
