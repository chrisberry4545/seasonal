import React, { FC } from 'react';
import { Image, View, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { TextMedium, BareButton } from '../../components-elements';
import { styles } from '../../styles';
import { IImageGridItem } from './ImageGridItem.interface';

const gridPadding = 18;

const styleImageGridItem: ViewStyle = {
  aspectRatio: 1,
  marginBottom: gridPadding,
  paddingBottom: gridPadding,
  width: '50%'
};

const styleImageGridItemWithBorder: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed
};

const styleImageGridItemInner: ViewStyle = {
  flex: 1
};

const styleImageGridItemInnerEven: ViewStyle = {
  paddingRight: 10
};

const styleImageGridItemInnerOdd: ViewStyle = {
  paddingLeft: 10
};

const styleImageGridItemImage: ImageStyle = {
  borderRadius: 15,
  flex: 1
};

const styleImageGridItemText: ViewStyle = {
  marginTop: gridPadding
};

export const ImageGridItem: FC<IImageGridItem> = ({
  id,
  evenGridItem,
  name,
  imageUrlSmall,
  onClick,
  hasBottomBorder
}) => (
  <BareButton
    style={ [
      styleImageGridItem,
      hasBottomBorder ? [styleImageGridItemWithBorder] : undefined
    ] }
    onClick={() => {
      if (onClick) {
        onClick(id);
      }
    }}
    activeOpacity={ onClick ? 0.2 : 1 }
  >
    <View style={ [
      styleImageGridItemInner,
      evenGridItem ? styleImageGridItemInnerEven : styleImageGridItemInnerOdd
    ] }>
      <Image style={ styleImageGridItemImage } source={ { uri: imageUrlSmall } } />
      <TextMedium style={ styleImageGridItemText }>
        { name }
      </TextMedium>
    </View>
  </BareButton>
);
