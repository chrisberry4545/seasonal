
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodDetailsTopSection } from './FoodDetailsTopSection';
import { HeaderAndBackButton } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  HeaderAndBackButton: () => 'HeaderAndBackButton'
}));

describe('<FoodDetailsTopSection />', () => {
  let wrapper: ShallowWrapper;
  const foodImageUrl = 'https://image.com';
  const foodName = 'Food';
  let mockOnGoBack: jest.Mock;

  beforeEach(() =>
    mockOnGoBack = jest.fn()
  );

  describe('when the food has finished loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodDetailsTopSection
          foodImageUrl={foodImageUrl}
          foodName={foodName}
          isLoading={false}
          onGoBack={mockOnGoBack} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can go back from food details', () => {
      const onGoBack = wrapper.find(HeaderAndBackButton).props().onGoBack;
      if (onGoBack) {
        onGoBack();
      }
      expect(mockOnGoBack).toHaveBeenCalled();
    });

  });

  describe('when there is no image', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodDetailsTopSection
          foodImageUrl={undefined}
          foodName={foodName}
          isLoading={false}
          onGoBack={mockOnGoBack} />
      )
    );

    test('does not display an image', () =>
      expect(wrapper.find('img').exists()).toBe(false));

  });

  describe('when the food is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodDetailsTopSection
          foodImageUrl={foodImageUrl}
          foodName={foodName}
          isLoading={true}
          onGoBack={mockOnGoBack} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
