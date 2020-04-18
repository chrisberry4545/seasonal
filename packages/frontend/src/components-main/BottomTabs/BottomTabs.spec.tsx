
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BottomTabs } from './BottomTabs';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  BareButton: () => 'BareButton'
}));

describe('<BottomTabs />', () => {
  let wrapper: ShallowWrapper;
  let mockGoToFoodTab: jest.Mock;
  let mockGoToRecipesTab: jest.Mock;

  const getTabWithText = (text: string) =>
    wrapper.findWhere((el) =>
      el.type() === BareButton
      && el.children().text() === text
    );

  beforeEach(() => {
    mockGoToFoodTab = jest.fn();
    mockGoToRecipesTab = jest.fn();
    wrapper = shallow(
      <BottomTabs
        isCurrentTabFood={true}
        isCurrentTabRecipes={false}
        goToFoodTab={mockGoToFoodTab}
        goToRecipesTab={mockGoToRecipesTab} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can click the food tab', () => {
    const onClick = getTabWithText('Food').props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockGoToFoodTab).toHaveBeenCalled();
  });

  test('can click the recipe tab', () => {
    const onClick = getTabWithText('Recipes').props().onClick;
    if (onClick) {
      onClick();
    }
    expect(mockGoToRecipesTab).toHaveBeenCalled();
  });

});
