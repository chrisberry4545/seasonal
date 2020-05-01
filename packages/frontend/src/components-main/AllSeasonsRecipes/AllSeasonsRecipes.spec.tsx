
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AllSeasonsRecipes } from './AllSeasonsRecipes';
import { IAllSeasonsRecipesProps } from './AllSeasonsRecipes.interface';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { ImageGrid } from '../../components-layout';
import InfiniteScroll from 'react-infinite-scroller';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('../../components-layout', () => ({
  ImageGrid: () => 'ImageGrid',
  SeasonNameView: () => 'SeasonNameView'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));
jest.mock('../DietaryFilters/DietaryFilters.connector', () => ({
  DietaryFiltersConnector: () => 'DietaryFiltersConnector'
}));

describe('<AllSeasonsRecipes />', () => {
  let wrapper: ShallowWrapper;
  let mockOnRecipeClick: jest.Mock;
  const seasons = [{
    id: '1',
    name: 'January'
  }, {
    id: '2',
    name: 'February'
  }] as IHydratedSeason[];
  let mockIncreaseNumberOfAllSeasonsInView: jest.Mock;

  const initProps = (): IAllSeasonsRecipesProps => ({
    hasMoreSeasonsInAllSeasonsView: true,
    increaseNumberOfAllSeasonsInView:
      mockIncreaseNumberOfAllSeasonsInView,
    isCurrentTabRecipes: true,
    isLoading: false,
    onRecipeClick: mockOnRecipeClick,
    seasons
  });

  beforeEach(() => {
    mockOnRecipeClick = jest.fn();
    mockIncreaseNumberOfAllSeasonsInView = jest.fn();
  });

  describe('when the seasons are loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsRecipes {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('when a food item is clicked', () => {
      const onClick = wrapper.find(ImageGrid).first().props().onClick;
      if (onClick) {
        onClick('id');
      }
      expect(mockOnRecipeClick).toHaveBeenCalledWith('id');
    });

    test('when more seasons are loaded', () => {
      const loadMore = wrapper.find(InfiniteScroll).first().props().loadMore;
      if (loadMore) {
        loadMore(1);
      }
      expect(mockIncreaseNumberOfAllSeasonsInView).toHaveBeenCalled();
    });

  });

  describe('when the seasons are not loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsRecipes {...({
          ...initProps(),
          isLoading: true
        })} />
      )
    );

    test('displays a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

  describe('when the current tab is not the recipes tab', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsRecipes {...({
          ...initProps(),
          isCurrentTabRecipes: false
        })} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));

  });

});
