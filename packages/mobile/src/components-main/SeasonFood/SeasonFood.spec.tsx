import React from 'react';
import { SeasonFood } from './SeasonFood';
import { shallow, ShallowWrapper } from 'enzyme';
import { TopLoadingSpinner, SwitchableGridOrList } from '../../components-layout';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

jest.mock('../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector', () => ({
  SeasonDetailsContentWrapperConnector: () => 'SeasonDetailsContentWrapperConnector'
}));
jest.mock('../../components-layout', () => ({
  SwitchableGridOrList: () => 'SwitchableGridOrList',
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<SeasonFood />', () => {
  let wrapper: ShallowWrapper;
  const food = [{}] as IFood[];
  let mockOnFoodClick: jest.Mock;
  let mockOnToggleListView: jest.Mock;
  beforeEach(() => {
    mockOnFoodClick = jest.fn();
    mockOnToggleListView = jest.fn();
  });

  describe('when it is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonFood
          isLoading={false}
          food={food}
          onFoodClick={mockOnFoodClick}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView} />
      )
    );

    test('renders correctly', () =>
      expect(wrapper).toMatchSnapshot());

    test('can click on food items', () => {
      const onClick = wrapper.find(SwitchableGridOrList)
        .first().props().onClick;
      if (onClick) {
        onClick('foodId');
      }
      expect(mockOnFoodClick).toHaveBeenCalledWith('foodId');
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
        <SeasonFood
          isLoading={true}
          food={food}
          onFoodClick={mockOnFoodClick}
          isListViewShown={true}
          onToggleListView={mockOnToggleListView} />
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(TopLoadingSpinner).exists()).toBe(true));

  });

});
