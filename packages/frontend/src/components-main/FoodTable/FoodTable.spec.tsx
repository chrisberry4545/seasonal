
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodTable } from './FoodTable';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { IFoodTableProps } from './FoodTable.interface';
import { ImageGrid } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  ImageGrid: () => 'ImageGrid'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('<FoodTable />', () => {
  let wrapper: ShallowWrapper;
  const food = [{ id: '1' }] as IFood[];
  let mockOnFoodClick: jest.Mock;

  const initProps = (): IFoodTableProps => ({
    food,
    isCurrentTabFood: true,
    isLoading: false,
    onFoodClick: mockOnFoodClick
  });

  beforeEach(() =>
    mockOnFoodClick = jest.fn()
  );

  describe('when the food has finished loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodTable {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click food items', () => {
      const onClick = wrapper.find(ImageGrid).first().props().onClick;
      if (onClick) {
        onClick('foodId');
      }
      expect(mockOnFoodClick).toHaveBeenCalledWith('foodId');
    });

  });

  describe('when the food data is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodTable {...({
          ...initProps(),
          isLoading: true
        })} />
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

  describe('when the current tab is not the food tab', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodTable {...({
          ...initProps(),
          isCurrentTabFood: false
        })} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
