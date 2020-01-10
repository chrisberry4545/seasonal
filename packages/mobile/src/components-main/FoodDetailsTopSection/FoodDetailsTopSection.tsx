import React, { FC } from 'react';

import {
  TextHeadingMedium,
  BackArrowIconButton
} from '../../components-elements';

import {
  IFoodDetailsTopSectionProps
} from './FoodDetailsTopSection.interface';
import { View, Image, ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native';
import { styles } from '../../styles';
import { sizes } from '../../styles/sizes';

const styleFoodDetailsTopSection: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  height: 300,
  paddingBottom: 33
};

const styleFoodDetailsTopSectionInner: ViewStyle = {
  alignItems: 'center',
  display: 'flex',
  flex: 0,
  flexDirection: 'row',
  height: 50,
  marginBottom: 6,
  marginTop: 4
};

const styleFoodDetailsTopSectionText: TextStyle = {
  flex: 1,
  marginRight: sizes.arrowIcon,
  textAlign: 'center'
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
    <View style={styleFoodDetailsTopSectionInner}>
      <BackArrowIconButton onClick={onGoBack} />
      <TextHeadingMedium style={styleFoodDetailsTopSectionText}>
        {foodName}
      </TextHeadingMedium>
    </View>
    {
      foodImageUrl &&
        <Image
          style={styleFoodDetailsTopSectionImage}
          source={{ uri: foodImageUrl }} />
    }
  </View>
  : null
);
