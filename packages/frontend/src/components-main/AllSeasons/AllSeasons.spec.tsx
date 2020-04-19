
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AllSeasons } from './AllSeasons';
import { IAllSeasonsProps } from './AllSeasons.interface';
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

describe('<AllSeasons />', () => {
  let wrapper: ShallowWrapper;
  let mockOnFoodClick: jest.Mock;
  const seasons = [{
    id: '1',
    name: 'January'
  }, {
    id: '2',
    name: 'February'
  }] as IHydratedSeason[];
  let mockIncreaseNumberOfAllFoodSeasonsInView: jest.Mock;

  const initProps = (): IAllSeasonsProps => ({
    hasMoreSeasonsInAllSeasonsView: true,
    increaseNumberOfAllFoodSeasonsInView:
      mockIncreaseNumberOfAllFoodSeasonsInView,
    isLoading: false,
    onFoodClick: mockOnFoodClick,
    seasons
  });

  beforeEach(() => {
    mockOnFoodClick = jest.fn();
    mockIncreaseNumberOfAllFoodSeasonsInView = jest.fn();
  });

  describe('when the seasons are loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasons {...initProps()} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('when a food item is clicked', () => {
      const onClick = wrapper.find(ImageGrid).first().props().onClick;
      if (onClick) {
        onClick('id');
      }
      expect(mockOnFoodClick).toHaveBeenCalledWith('id');
    });

    test('when more seasons are loaded', () => {
      const loadMore = wrapper.find(InfiniteScroll).first().props().loadMore;
      if (loadMore) {
        loadMore(1);
      }
      expect(mockIncreaseNumberOfAllFoodSeasonsInView).toHaveBeenCalled();
    });

  });

  describe('when the seasons are not loaded', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasons {...({
          ...initProps(),
          isLoading: true
        })} />
      )
    );

    test('displays a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

});
