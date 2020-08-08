import React, { FC } from 'react';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import {
  styles
} from '../../styles';
import {
  styleTextLarge
} from '../../components-elements/Text';
import { ViewStyle } from 'react-native';
import { ROUTES } from '../../const';
import { IFoodAndRecipeTabsInputProps } from './FoodAndRecipeTabs.interface';

const styleSeasonalDetailsTabWrapper: ViewStyle = {
  marginTop: -20
};

const styleSeasonalDetailsTabWrapperNoRecipes: ViewStyle = {
  height: 0
};

const styleSeasonalDetailsTabLabel: ViewStyle = {
  marginBottom: 16,
  marginTop: 10
};

export const FoodAndRecipeTabs: FC<IFoodAndRecipeTabsInputProps> = ({
  foodScreen,
  recipeScreen,
  hasRecipes,
  foodTabLabel,
  recipeTabLabel
}) => {
  const Tab = createBottomTabNavigator();
  return <Tab.Navigator tabBarOptions={{
    activeBackgroundColor: styles.colors.selectionColor,
    labelStyle: [
      styleTextLarge,
      styleSeasonalDetailsTabLabel
    ],
    style: [
      styleSeasonalDetailsTabWrapper,
      ...(hasRecipes ? [] : [styleSeasonalDetailsTabWrapperNoRecipes])
    ]
  }}>
    <Tab.Screen
      options={{ tabBarLabel: foodTabLabel }}
      name={ROUTES.FOOD_TAB} component={foodScreen} />
      {
        hasRecipes
          ?
            <Tab.Screen
              options={{ tabBarLabel: recipeTabLabel }}
              name={ROUTES.RECIPES_TAB} component={recipeScreen} />
          : null
      }
  </Tab.Navigator>;
};
