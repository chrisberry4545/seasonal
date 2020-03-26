import React, { FC } from 'react';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter,
  RecipesForFoodConnecter
} from '../../components-main';

import { MainContainer, DefaultPaddingContainer } from '../../components-layout';
import { ScrollView } from 'react-native-gesture-handler';
import { View, ViewStyle } from 'react-native';

const styleFoodDetailsPageView: ViewStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 500
};

export const FoodDetailsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DefaultPaddingContainer>
      <ScrollView>
        <View style={styleFoodDetailsPageView}>
          <View>
            <FoodDetailsLoaderConnecter />
            <FoodDetailsTopSectionConnecter />
            <RecipesForFoodConnecter />
            <SeasonsForFoodConnecter />
          </View>
        </View>
      </ScrollView>
    </DefaultPaddingContainer>
  </MainContainer>
);
