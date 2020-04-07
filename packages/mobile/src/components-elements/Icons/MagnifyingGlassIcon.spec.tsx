import React from 'react';
import { MagnifyingGlassIcon } from './MagnifyingGlassIcon';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('./IconBase', () => ({
  IconBase: () => 'IconBase'
}));

describe('<MagnifyingGlassIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MagnifyingGlassIcon
        size={50}
        color={'#000000'} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
