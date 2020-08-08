import React from 'react';
import { FoodAndRecipeTabs } from './FoodAndRecipeTabs';
import { shallow, ShallowWrapper } from 'enzyme';
import { View } from 'react-native';
import { IFoodAndRecipeTabsInputProps } from './FoodAndRecipeTabs.interface';

describe('<FoodAndRecipeTabs />', () => {
  let wrapper: ShallowWrapper;
  const generateComponent = () => <View></View>;
  const properties = {
    foodScreen: generateComponent,
    foodTabLabel: 'Food',
    hasRecipes: true,
    recipeScreen: generateComponent,
    recipeTabLabel: 'Recipes'
  } as IFoodAndRecipeTabsInputProps;

  describe('when there are recipes', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodAndRecipeTabs
          {...properties}
        />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when there are no recipes', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodAndRecipeTabs
          {...{
            ...properties,
            hasRecipes: false
          }}
        />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

});
