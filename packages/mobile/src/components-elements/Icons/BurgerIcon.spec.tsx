import React from 'react';
import { BurgerIcon } from './BurgerIcon';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('./IconBase', () => ({
  IconBase: () => 'IconBase'
}));

describe('<BurgerIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BurgerIcon
        size={50}
        color={'#000000'} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
