import React from 'react';
import { ListIcon } from './ListIcon';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('./IconBase', () => ({
  IconBase: () => 'IconBase'
}));

describe('<ListIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ListIcon
        size={50}
        color={'#000000'} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
