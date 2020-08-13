import React, { FC } from 'react';
import { View, TextStyle, ViewStyle, StyleSheet } from 'react-native';

import { IRecipeForFoodProps } from './RecipesForFood.interface';
import { SwitchableGridOrList } from '../../components-layout';
import { TextHeadingSmall } from '../../components-elements';
import { styles } from '../../styles';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';
import i18n from 'i18n-js';

const styleRecipesForFood: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed
};

const styleRecipesForFoodTitle: TextStyle = {
  marginBottom: 10,
  marginTop: 24,
  textAlign: 'center',
  width: '100%'
};

export const RecipesForFood: FC<IRecipeForFoodProps> = ({
  isLoading,
  currentFoodDetailsRecipes,
  onRecipeSelected,
  isListViewShown,
  onToggleListView
}) => (
  !isLoading && currentFoodDetailsRecipes && currentFoodDetailsRecipes.length > 0
    ? <View style={styleRecipesForFood}>
      <TextHeadingSmall style={styleRecipesForFoodTitle}>
        {i18n.t('recipesForFoodTitle')}
      </TextHeadingSmall>
      <DietaryFiltersConnector />
      <SwitchableGridOrList
        maxItemsPerRow={isListViewShown ? 1 : 3}
        isListViewShown={isListViewShown}
        onToggleListView={onToggleListView}
        data={currentFoodDetailsRecipes}
        onClick={onRecipeSelected}
        noResultsMessage='No results found' />
    </View>
    : null
);
