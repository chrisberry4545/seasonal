import React from 'react';
import { SeasonRecipes } from './SeasonRecipes';
import { shallow, ShallowWrapper } from 'enzyme';
import { TopLoadingSpinner, SwitchableGridOrList } from '../../components-layout';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

jest.mock('../DietaryFilters/DietaryFilters.connector', () => ({
  DietaryFiltersConnector: () => 'DietaryFiltersConnector'
}));
jest.mock('../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector', () => ({
  SeasonDetailsContentWrapperConnector: () => 'SeasonDetailsContentWrapperConnector'
}));
jest.mock('../../components-layout', () => ({
  SwitchableGridOrList: () => 'SwitchableGridOrList',
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<SeasonRecipes />', () => {
  let wrapper: ShallowWrapper;
  const recipes = [{}] as IRecipe[];
  let mockOnRecipesClick: jest.Mock;
  let mockOnToggleListView: jest.Mock;
  beforeEach(() => {
    mockOnRecipesClick = jest.fn();
    mockOnToggleListView = jest.fn();
  });

  describe('when it is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonRecipes
          isLoading={false}
          recipes={recipes}
          onRecipeClick={mockOnRecipesClick}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView} />
      )
    );

    test('renders correctly', () =>
      expect(wrapper).toMatchSnapshot());

    test('can click on recipe items', () => {
      const onClick = wrapper.find(SwitchableGridOrList)
        .first().props().onClick;
      if (onClick) {
        onClick('foodId');
      }
      expect(mockOnRecipesClick).toHaveBeenCalledWith('foodId');
    });

    test('can toggle list view', () => {
      const onToggleListView = wrapper.find(SwitchableGridOrList)
        .first().props().onToggleListView;
      if (onToggleListView) {
        onToggleListView();
      }
      expect(mockOnToggleListView).toHaveBeenCalled();
    });

  });

  describe('when it is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonRecipes
          isLoading={true}
          recipes={recipes}
          onRecipeClick={mockOnRecipesClick}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView} />
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(TopLoadingSpinner).exists()).toBe(true));

  });

});
