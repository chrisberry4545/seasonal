import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { RecipesForFood } from './RecipesForFood';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { ImageGrid } from '../../components-layout';

jest.mock('../DietaryFilters/DietaryFilters.connector', () => ({
  DietaryFiltersConnector: () => 'DietaryFiltersConnector'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingSmall: () => 'TextHeadingSmall'
}));
jest.mock('../../components-layout', () => ({
  ImageGrid: () => 'ImageGrid'
}));

describe('<RecipesForFood />', () => {
  let wrapper: ShallowWrapper;
  const recipes = [{}, {}] as IRecipe[];
  let mockOnRecipeSelected: jest.Mock;

  beforeEach(() =>
    mockOnRecipeSelected = jest.fn()
  );

  describe('when the recipes are loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <RecipesForFood
          isLoading={false}
          currentFoodDetailsRecipes={recipes}
          onRecipeSelected={mockOnRecipeSelected}>
          Children
        </RecipesForFood>
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('can click a recipe', () => {
      const onClick = wrapper.find(ImageGrid).first().props().onClick;
      if (onClick) {
        onClick('recipeId');
      }
      expect(mockOnRecipeSelected).toHaveBeenCalledWith('recipeId');
    });
  });

  describe('when the recipe are not loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <RecipesForFood
          isLoading={true}
          currentFoodDetailsRecipes={recipes}
          onRecipeSelected={mockOnRecipeSelected}>
          Children
        </RecipesForFood>
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
