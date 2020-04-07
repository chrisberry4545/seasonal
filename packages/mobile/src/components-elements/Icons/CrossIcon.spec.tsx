import React from 'react';
import { CrossIcon } from './CrossIcon';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('./IconBase', () => ({
  IconBase: () => 'IconBase'
}));

describe('<CrossIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CrossIcon
        size={50}
        color={'#000000'} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
