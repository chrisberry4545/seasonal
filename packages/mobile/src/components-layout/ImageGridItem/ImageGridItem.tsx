import React, { FC } from 'react';
import { Image, View, ViewStyle, ImageStyle, StyleSheet } from 'react-native';
import { TextMedium, BareButton } from '../../components-elements';
import { styles } from '../../styles';
import { IImageGridItem } from './ImageGridItem.interface';

const gridPadding = 18;

const styleImageGridItem: ViewStyle = {
  aspectRatio: 1,
  marginBottom: gridPadding,
  paddingBottom: gridPadding
};

const styleImageGridItemWithBorder: ViewStyle = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed
};

const styleImageGridItemInner: ViewStyle = {
  flex: 1
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
  name,
  imageUrlSmall,
  onClick,
  hasBottomBorder,
  paddingLeft,
  paddingRight,
  width
}) => (
  <BareButton
    style={{
      ...styleImageGridItem,
      ...{
        paddingLeft: paddingLeft || 0,
        paddingRight: paddingRight || 0,
        width: width || '50%'
      },
      ...(hasBottomBorder ? styleImageGridItemWithBorder : {})
    }}
    onClick={() => {
      if (onClick) {
        onClick(id);
      }
    }}
    activeOpacity={ onClick ? 0.2 : 1 }
  >
    <View style={ styleImageGridItemInner }>
      <Image style={ styleImageGridItemImage } source={ { uri: imageUrlSmall } } />
      <TextMedium style={ styleImageGridItemText }>
        { name }
      </TextMedium>
    </View>
  </BareButton>
);
