import React from 'react';
import { Header } from './Header';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  BurgerIcon: () => 'BurgerIcon',
  TextHeadingLarge: () => 'TextHeadingLarge'
}));

describe('<Header />', () => {
  let wrapper: ShallowWrapper;
  let mockOnMenuOpen: jest.Mock;

  beforeEach(() => {
    mockOnMenuOpen = jest.fn();
    wrapper = shallow(
      <Header
        onMenuOpen={mockOnMenuOpen} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can open the menu', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnMenuOpen).toHaveBeenCalled();
  });
});
