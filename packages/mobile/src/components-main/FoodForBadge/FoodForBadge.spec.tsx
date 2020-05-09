import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodForBadge } from './FoodForBadge';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { ImageGrid } from '../../components-layout';

jest.mock('../../components-elements', () => ({
  TextMedium: () => 'TextMedium'
}));
jest.mock('../../components-layout', () => ({
  ImageGrid: () => 'ImageGrid'
}));

describe('<FoodForBadge />', () => {
  let wrapper: ShallowWrapper;
  const food = [{}, {}] as IFood[];
  let mockOnFoodSelected: jest.Mock;

  beforeEach(() =>
    mockOnFoodSelected = jest.fn()
  );

  describe('when the recipes are loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodForBadge
          isLoading={false}
          currentBadgeFood={food}
          onFoodSelected={mockOnFoodSelected}>
          Children
        </FoodForBadge>
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click badge', () => {
      const onClick = wrapper.find(ImageGrid).first().props().onClick;
      if (onClick) {
        onClick('badgeId');
      }
      expect(mockOnFoodSelected).toHaveBeenCalledWith('badgeId');
    });
  });

  describe('when the food is not loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodForBadge
          isLoading={true}
          currentBadgeFood={food}
          onFoodSelected={mockOnFoodSelected}>
          Children
        </FoodForBadge>
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
