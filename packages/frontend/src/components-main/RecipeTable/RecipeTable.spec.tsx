
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { RecipeTable } from './RecipeTable';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { IRecipeTableProps } from './RecipeTable.interface';
import { ImageGrid } from '../../components-layout';

jest.mock('../../components-layout', () => ({
  ImageGrid: () => 'ImageGrid'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));
jest.mock('../DietaryFilters/DietaryFilters.connector', () => ({
  DietaryFiltersConnector: () => 'DietaryFiltersConnector'
}));

describe('<RecipeTable />', () => {
  let wrapper: ShallowWrapper;
  const recipes = [{ id: '1' }] as IRecipe[];
  let mockOnRecipeClicked: jest.Mock;

  const initProps = (): IRecipeTableProps => ({
    isCurrentTabFood: false,
    isLoading: false,
    onRecipeClick: mockOnRecipeClicked,
    recipes
  });

  beforeEach(() =>
    mockOnRecipeClicked = jest.fn()
  );

  describe('when the recipe has finished loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <RecipeTable {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click recipe items', () => {
      const onClick = wrapper.find(ImageGrid).first().props().onClick;
      if (onClick) {
        onClick('recipeId');
      }
      expect(mockOnRecipeClicked).toHaveBeenCalledWith('recipeId');
    });

  });

  describe('when the recipe data is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <RecipeTable {...({
          ...initProps(),
          isLoading: true
        })} />
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

  describe('when the current tab is not the recipe tab', () => {
    beforeEach(() =>
      wrapper = shallow(
        <RecipeTable {...({
          ...initProps(),
          isCurrentTabFood: true
        })} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
