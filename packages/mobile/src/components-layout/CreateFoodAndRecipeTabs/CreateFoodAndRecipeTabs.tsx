import {
  createBottomTabNavigator
} from 'react-navigation';

import {
  styles
} from '../../styles';

import {
  styleTextLarge
} from '../../components-elements/Text';
import { ViewStyle } from 'react-native';

import { ROUTES } from '../../const';
import { ConnectedComponent } from 'react-redux';

const styleSeasonalDetailsTabWrapper: ViewStyle = {
  marginTop: -20
};

const styleSeasonalDetailsTabLabel: ViewStyle = {
  marginBottom: 16,
  marginTop: 10
};

export const CreateFoodAndRecipeTabs = ({
  foodScreen,
  recipeScreen
}: {
  foodScreen: ConnectedComponent<any, any>,
  recipeScreen: ConnectedComponent<any, any>
}) => createBottomTabNavigator({
    [ROUTES.FOOD_TAB]: {
      navigationOptions: {
        tabBarLabel: 'Food'
      },
      screen: foodScreen
    },
    [ROUTES.RECIPES_TAB]: {
      navigationOptions: {
        tabBarLabel: 'Recipes'
      },
      screen: recipeScreen
    }
}, {
  tabBarOptions: {
    activeBackgroundColor: styles.colors.selectionColor,
    labelStyle: [styleTextLarge, styleSeasonalDetailsTabLabel],
    style: styleSeasonalDetailsTabWrapper
  }
});
