import React, { FC, ComponentType } from 'react';
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
import i18n from 'i18n-js';

const styleSeasonalDetailsTabWrapper: ViewStyle = {
  marginTop: -20
};

const styleSeasonalDetailsTabLabel: ViewStyle = {
  marginBottom: 16,
  marginTop: 10
};

export const FoodAndRecipeTabs: FC<{
  foodScreen: ComponentType,
  recipeScreen: ComponentType
}> = ({
  foodScreen,
  recipeScreen
}) => {
  const Tab = createBottomTabNavigator();
  return <Tab.Navigator tabBarOptions={{
    activeBackgroundColor: styles.colors.selectionColor,
    labelStyle: [styleTextLarge, styleSeasonalDetailsTabLabel],
    style: styleSeasonalDetailsTabWrapper
  }}>
    <Tab.Screen
      options={{ tabBarLabel: i18n.t('foodTab') }}
      name={ROUTES.FOOD_TAB} component={foodScreen} />
    <Tab.Screen
      options={{ tabBarLabel: i18n.t('recipesTab') }}
      name={ROUTES.RECIPES_TAB} component={recipeScreen} />
  </Tab.Navigator>;
};
