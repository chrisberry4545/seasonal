import React from 'react';
import { BackArrowIconButton } from './BackArrowIconButton';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../Buttons', () => ({
  BareButton: () => 'BareButton'
}));
jest.mock('../Icons', () => ({
  ArrowIcon: () => 'ArrowIcon'
}));

describe('<BackArrowIconButton />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BackArrowIconButton
        onClick={() => undefined}
        activeOpacity={0.3}
        style={{ color: 'blue' }} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
