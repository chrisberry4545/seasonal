
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodDetailsTopSection } from './FoodDetailsTopSection';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  ArrowIcon: () => 'ArrowIcon',
  BareButton: () => 'BareButton',
  TextHeadingMedium: () => 'TextHeadingMedium'
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
      const onClick = wrapper.find(BareButton).props().onClick;
      if (onClick) {
        onClick();
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
