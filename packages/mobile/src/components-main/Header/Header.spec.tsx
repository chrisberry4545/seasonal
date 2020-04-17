import React from 'react';
import { Header } from './Header';
import { shallow, ShallowWrapper } from 'enzyme';
import { NavigationEvents, NavigationEventPayload } from 'react-navigation';
import { BareButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  BurgerIcon: () => 'BurgerIcon',
  TextHeadingLarge: () => 'TextHeadingLarge'
}));

describe('<Header />', () => {
  let wrapper: ShallowWrapper;
  let mockOnMenuOpen: jest.Mock;
  let mockOnMenuClose: jest.Mock;

  beforeEach(() => {
    mockOnMenuOpen = jest.fn();
    mockOnMenuClose = jest.fn();
    wrapper = shallow(
      <Header
        onMenuClose={mockOnMenuClose}
        onMenuOpen={mockOnMenuOpen} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('closes the menu when opened', () => {
    const onDidFocus = wrapper.find(NavigationEvents).first().props().onDidFocus;
    if (onDidFocus) {
      onDidFocus({} as NavigationEventPayload);
    }
    expect(mockOnMenuClose).toHaveBeenCalled();
  });

  test('can open the menu', () => {
    const onClick = wrapper.find(BareButton).first().props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnMenuOpen).toHaveBeenCalled();
  });
});
