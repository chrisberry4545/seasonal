import React from 'react';
import { BurgerIcon } from './BurgerIcon';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<BurgerIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerIcon className='class' />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
