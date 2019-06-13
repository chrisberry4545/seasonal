import React, { FC } from 'react';
import { View, TextStyle, ViewStyle, StyleSheet } from 'react-native';

import { IRecipeForFoodProps } from './RecipesForFood.interface';
import { ImageGrid } from '../../components-layout';
import { TextHeadingSmall } from '../../components-elements';
import { styles } from '../../styles';

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
  onRecipeSelected
}) => (
  !isLoading && currentFoodDetailsRecipes && currentFoodDetailsRecipes.length > 0
    ? <View style={styleRecipesForFood}>
      <TextHeadingSmall style={styleRecipesForFoodTitle}>
        Recipes
      </TextHeadingSmall>
      <ImageGrid data={currentFoodDetailsRecipes} onClick={onRecipeSelected} noResultsMessage='No results found' />
    </View>
    : null
);
