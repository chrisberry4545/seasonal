import React from 'react';
import { AllSeasonsRecipes } from './AllSeasonsRecipes';
import { shallow, ShallowWrapper } from 'enzyme';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { AllSeasonsWrapper } from '../AllSeasonsWrapper/AllSeasonsWrapper';

jest.mock('../AllSeasonsWrapper/AllSeasonsWrapper', () => ({
  AllSeasonsWrapper: () => 'AllSeasonsWrapper'
}));

describe('<AllSeasonsRecipes />', () => {
  const seasons = [{
    id: '1',
    name: 's1'
  }] as IHydratedSeason[];
  let wrapper: ShallowWrapper;
  let mockOnRecipeClick: jest.Mock;
  let mockIncreaseNumberOfAllSeasonsInView: jest.Mock;
  let mockOnToggleListView: jest.Mock;

  beforeEach(() => {
    mockOnRecipeClick = jest.fn();
    mockIncreaseNumberOfAllSeasonsInView = jest.fn();
    mockOnToggleListView = jest.fn();
    wrapper = shallow(
      <AllSeasonsRecipes
        isLoading={false}
        increaseNumberOfAllSeasonsInView={
          mockIncreaseNumberOfAllSeasonsInView
        }
        onRecipeClick={mockOnRecipeClick}
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
    expect(mockOnRecipeClick).toHaveBeenCalledWith('id');
  });

  test('can toggle the list view', () => {
    wrapper.find(AllSeasonsWrapper)
      .first().props().onToggleListView();
    expect(mockOnToggleListView).toHaveBeenCalled();
  });

});
