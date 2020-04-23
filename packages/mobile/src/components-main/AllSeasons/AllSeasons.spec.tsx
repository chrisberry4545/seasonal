import React from 'react';
import { AllSeasons } from './AllSeasons';
import { shallow, ShallowWrapper } from 'enzyme';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { FlatList } from 'react-native-gesture-handler';
import { TopLoadingSpinner, SwitchableGridOrList } from '../../components-layout';

jest.mock('react-native-gesture-handler', () => ({
  FlatList: () => 'FlatList'
}));
jest.mock('../../components-layout', () => ({
  SeasonNameView: () => 'SeasonNameView',
  SwitchableGridOrList: () => 'SwitchableGridOrList',
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<AllSeasons />', () => {
  const seasons = [{
    id: '1',
    name: 's1'
  }] as IHydratedSeason[];
  let wrapper: ShallowWrapper;
  let mockOnFoodClick: jest.Mock;
  let mockIncreaseNumberOfAllSeasonsInView: jest.Mock;
  let mockOnToggleListView: jest.Mock;

  beforeEach(() => {
    mockOnFoodClick = jest.fn();
    mockIncreaseNumberOfAllSeasonsInView = jest.fn();
    mockOnToggleListView = jest.fn();
    wrapper = shallow(
      <AllSeasons
        isLoading={false}
        increaseNumberOfAllSeasonsInView={
          mockIncreaseNumberOfAllSeasonsInView
        }
        onFoodClick={mockOnFoodClick}
        seasons={seasons}
        isListViewShown={true}
        onToggleListView={mockOnToggleListView}
        />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can increase items in view', () => {
    const increaseItemsInView = wrapper.find(FlatList)
      .first().props().onEndReached;
    if (increaseItemsInView) {
      increaseItemsInView({} as any);
    }
    expect(mockIncreaseNumberOfAllSeasonsInView)
      .toHaveBeenCalled();
  });

  describe('when isLoading is true', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasons
          isLoading={true}
          increaseNumberOfAllSeasonsInView={
            mockIncreaseNumberOfAllSeasonsInView
          }
          onFoodClick={mockOnFoodClick}
          seasons={seasons}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView}
          />
      )
    );

    test('renders a loading spinner', () =>
      expect(wrapper.find(TopLoadingSpinner).exists()).toBe(true));

  });

  describe('when the seasons are undefined', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasons
          isLoading={false}
          increaseNumberOfAllSeasonsInView={
            mockIncreaseNumberOfAllSeasonsInView
          }
          onFoodClick={mockOnFoodClick}
          seasons={undefined}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView}
          />
      )
    );

    test('renders a loading spinner', () =>
      expect(wrapper.find(TopLoadingSpinner).exists()).toBe(true));

  });

  describe('inner list', () => {
    let innerListWrapper: ShallowWrapper;
    beforeEach(() => {
      const RenderItem = wrapper.find(FlatList).first().props().renderItem;
      innerListWrapper = shallow(<RenderItem {...({
        item: seasons
      } as any)} />);
    });

    test('renders the list correctly', () => expect(innerListWrapper).toMatchSnapshot());

    test('can click the food items', () => {
      const onClick = innerListWrapper.find(SwitchableGridOrList).first().props().onClick;
      if (onClick) {
        onClick('id');
      }
      expect(mockOnFoodClick).toHaveBeenCalledWith('id');
    });

    test('can toggle the list view', () => {
      const onToggleListView = innerListWrapper.find(SwitchableGridOrList).first().props().onToggleListView;
      if (onToggleListView) {
        onToggleListView();
      }
      expect(mockOnToggleListView).toHaveBeenCalled();
    });
  });
});
