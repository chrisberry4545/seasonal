
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderAndBackButton } from './HeaderAndBackButton';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  ArrowIcon: () => 'ArrowIcon',
  BareButton: () => 'BareButton',
  TextHeadingMedium: () => 'TextHeadingMedium'
}));

describe('<HeaderAndBackButton />', () => {
  let wrapper: ShallowWrapper;
  const title = 'Title';
  let mockOnGoBack: jest.Mock;

  beforeEach(() => {
    mockOnGoBack = jest.fn();
    wrapper = shallow(
      <HeaderAndBackButton
        title={title}
        onGoBack={mockOnGoBack} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can go back from food details', () => {
    const onClick = wrapper.find(BareButton).props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnGoBack).toHaveBeenCalled();
  });

});
