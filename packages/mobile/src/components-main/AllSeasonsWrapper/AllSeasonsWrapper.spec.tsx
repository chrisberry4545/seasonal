import React from 'react';
import { AllSeasonsWrapper } from './AllSeasonsWrapper';
import { shallow, ShallowWrapper } from 'enzyme';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { FlatList } from 'react-native-gesture-handler';
import { SwitchableGridOrList } from '../../components-layout';
import { LoadingSpinner } from '../../components-elements';

jest.mock('react-native-gesture-handler', () => ({
  FlatList: () => 'FlatList'
}));
jest.mock('../../components-layout', () => ({
  MainContainer: () => 'MainContainer',
  SeasonNameView: () => 'SeasonNameView',
  SwitchableGridOrList: () => 'SwitchableGridOrList',
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));
jest.mock('../../components-elements', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));
jest.mock('../Header/Header.connector', () => ({
  HeaderConnecter: () => 'HeaderConnecter'
}));

describe('<AllSeasonsWrapper />', () => {
  const seasons = [{
    food: [{
      name: 'f1'
    }],
    id: '1',
    name: 's1'
  }] as IHydratedSeason[];
  let wrapper: ShallowWrapper;
  let mockOnItemClick: jest.Mock;
  let mockIncreaseNumberOfAllSeasonsInView: jest.Mock;
  let mockOnToggleListView: jest.Mock;

  beforeEach(() => {
    mockOnItemClick = jest.fn();
    mockIncreaseNumberOfAllSeasonsInView = jest.fn();
    mockOnToggleListView = jest.fn();
    wrapper = shallow(
      <AllSeasonsWrapper
        propName='food'
        isLoading={false}
        increaseNumberOfAllSeasonsInView={
          mockIncreaseNumberOfAllSeasonsInView
        }
        onItemClick={mockOnItemClick}
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
        <AllSeasonsWrapper
          propName='food'
          isLoading={true}
          increaseNumberOfAllSeasonsInView={
            mockIncreaseNumberOfAllSeasonsInView
          }
          onItemClick={mockOnItemClick}
          seasons={seasons}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView}
          />
      )
    );

    test('renders a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

  });

  describe('when the seasons are undefined', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsWrapper
          propName='food'
          isLoading={false}
          increaseNumberOfAllSeasonsInView={
            mockIncreaseNumberOfAllSeasonsInView
          }
          onItemClick={mockOnItemClick}
          seasons={undefined}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView}
          />
      )
    );

    test('renders a loading spinner', () =>
      expect(wrapper.find(LoadingSpinner).exists()).toBe(true));

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
      expect(mockOnItemClick).toHaveBeenCalledWith('id');
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
