import React from 'react';
import { RecipesForFood } from './RecipesForFood';
import { shallow, ShallowWrapper } from 'enzyme';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { SwitchableGridOrList } from '../../components-layout';

jest.mock('../DietaryFilters/DietaryFilters.connector', () => ({
  DietaryFiltersConnector: () => 'DietaryFiltersConnector'
}));
jest.mock('../../components-layout', () => ({
  SwitchableGridOrList: () => 'SwitchableGridOrList'
}));
jest.mock('../../components-elements', () => ({
  TextHeadingSmall: () => 'TextHeadingSmall'
}));

describe('<RecipesForFood />', () => {
  let wrapper: ShallowWrapper;
  let mockOnRecipeSelected: jest.Mock;
  let mockOnToggleListView: jest.Mock;
  const currentFoodDetailsRecipes = [{
    id: '1'
  }] as IRecipe[];

  beforeEach(() => {
    mockOnRecipeSelected = jest.fn();
    mockOnToggleListView = jest.fn();
    wrapper = shallow(
      <RecipesForFood
        isLoading={false}
        currentFoodDetailsRecipes={currentFoodDetailsRecipes}
        onRecipeSelected={mockOnRecipeSelected}
        isListViewShown={true}
        onToggleListView={mockOnToggleListView} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can click on recipes', () => {
    const onClick = wrapper.find(SwitchableGridOrList).first().props().onClick;
    if (onClick) {
      onClick('recipeId');
    }
    expect(mockOnRecipeSelected).toHaveBeenCalledWith('recipeId');
  });

  test('can toggle the list view', () => {
    const onToggleListView = wrapper.find(SwitchableGridOrList).first().props().onToggleListView;
    if (onToggleListView) {
      onToggleListView();
    }
    expect(mockOnToggleListView).toHaveBeenCalled();
  });

  test('does not render anything when loading', () => {
    wrapper = shallow(
      <RecipesForFood
        isLoading={true}
        currentFoodDetailsRecipes={currentFoodDetailsRecipes}
        onRecipeSelected={mockOnRecipeSelected}
        isListViewShown={true}
        onToggleListView={mockOnToggleListView} />
    );
    expect(wrapper.children().exists()).toBe(false);
  });

  test('does not render anything when there are no recipes', () => {
    wrapper = shallow(
      <RecipesForFood
        isLoading={false}
        currentFoodDetailsRecipes={undefined}
        onRecipeSelected={mockOnRecipeSelected}
        isListViewShown={true}
        onToggleListView={mockOnToggleListView} />
    );
    expect(wrapper.children().exists()).toBe(false);
  });

  test('does not render anything when the recipes have length 0', () => {
    wrapper = shallow(
      <RecipesForFood
        isLoading={false}
        currentFoodDetailsRecipes={[]}
        onRecipeSelected={mockOnRecipeSelected}
        isListViewShown={true}
        onToggleListView={mockOnToggleListView} />
    );
    expect(wrapper.children().exists()).toBe(false);
  });

});
