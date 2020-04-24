import React from 'react';
import { AllSeasonsFood } from './AllSeasonsFood';
import { shallow, ShallowWrapper } from 'enzyme';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { AllSeasonsWrapper } from '../AllSeasonsWrapper/AllSeasonsWrapper';

jest.mock('../AllSeasonsWrapper/AllSeasonsWrapper', () => ({
  AllSeasonsWrapper: () => 'AllSeasonsWrapper'
}));

describe('<AllSeasonsFood />', () => {
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
      <AllSeasonsFood
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
    wrapper.find(AllSeasonsWrapper)
      .first().props().increaseNumberOfAllSeasonsInView();
    expect(mockIncreaseNumberOfAllSeasonsInView)
      .toHaveBeenCalled();
  });

  test('can click the food items', () => {
    wrapper.find(AllSeasonsWrapper)
      .first().props().onItemClick('id');
    expect(mockOnFoodClick).toHaveBeenCalledWith('id');
  });

  test('can toggle the list view', () => {
    wrapper.find(AllSeasonsWrapper)
      .first().props().onToggleListView();
    expect(mockOnToggleListView).toHaveBeenCalled();
  });

});
