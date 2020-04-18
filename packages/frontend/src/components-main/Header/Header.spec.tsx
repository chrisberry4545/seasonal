
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from './Header';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('../SearchBar/SearchBar.connector', () => ({
  SearchBarConnecter: () => 'SearchBarConnecter'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
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
      <Header onMenuOpen={mockOnMenuOpen} />
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
