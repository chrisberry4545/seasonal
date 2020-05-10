import React from 'react';
import { FoodDetailsTopSection } from './FoodDetailsTopSection';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderAndBackButton } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  DefaultPaddingContainer: () => 'DefaultPaddingContainer',
  HeaderAndBackButton: () => 'HeaderAndBackButton'
}));

describe('<FoodDetailsTopSection />', () => {
  let wrapper: ShallowWrapper;
  let mockOnGoBack: jest.Mock;

  beforeEach(() => {
    mockOnGoBack = jest.fn();
    wrapper = shallow(
      <FoodDetailsTopSection
        foodImageUrl='https://image.com'
        foodName='Food name'
        isLoading={false}
        onGoBack={mockOnGoBack} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can use arrow to go back', () => {
    const onClick = wrapper.find(HeaderAndBackButton).first().props().onGoBack;
    if (onClick) {
      onClick();
    }
    expect(mockOnGoBack).toHaveBeenCalled();
  });

  test('does not render anything when loading', () => {
    wrapper = shallow(
      <FoodDetailsTopSection
        foodImageUrl='https://image.com'
        foodName='Food name'
        isLoading={true}
        onGoBack={mockOnGoBack} />
    );
    expect(wrapper.children().exists()).toBe(false);
  });
});
