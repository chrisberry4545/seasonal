
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderAndBackButton } from './HeaderAndBackButton';
import { BackArrowIconButton } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BackArrowIconButton: () => 'BackArrowIconButton',
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
    const onClick = wrapper.find(BackArrowIconButton).props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockOnGoBack).toHaveBeenCalled();
  });

});
