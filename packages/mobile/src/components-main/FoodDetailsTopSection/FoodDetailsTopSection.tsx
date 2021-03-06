import React, { FC } from 'react';
import {
  IFoodDetailsTopSectionProps
} from './FoodDetailsTopSection.interface';
import { View, Image, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { styles } from '../../styles';
import { HeaderAndBackButton, DefaultPaddingContainer } from '../../components-layout';

const styleFoodDetailsTopSection: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  height: 300,
  paddingBottom: 33
};

const styleFoodDetailsDefaultPadding: ViewStyle = {
  flex: 1
};

const styleFoodDetailsTopSectionImage: ImageStyle = {
  borderRadius: 15,
  flex: 1
};

export const FoodDetailsTopSection: FC<IFoodDetailsTopSectionProps> = ({
  foodImageUrl,
  foodName,
  isLoading,
  onGoBack
}) => (
  !isLoading
    ? <View style={styleFoodDetailsTopSection}>
      <HeaderAndBackButton title={foodName} onGoBack={onGoBack} />
      {
        foodImageUrl
        && <DefaultPaddingContainer style={styleFoodDetailsDefaultPadding}>
          <Image
            style={styleFoodDetailsTopSectionImage}
            source={{ uri: foodImageUrl }} />
          </DefaultPaddingContainer>
      }
  </View>
  : null
);
