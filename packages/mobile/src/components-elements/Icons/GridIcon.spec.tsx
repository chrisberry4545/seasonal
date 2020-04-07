import React from 'react';
import { GridIcon } from './GridIcon';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('./IconBase', () => ({
  IconBase: () => 'IconBase'
}));

describe('<GridIcon />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GridIcon
        size={50}
        color={'#000000'} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
