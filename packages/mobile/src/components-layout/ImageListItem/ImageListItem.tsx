import React, { FC } from 'react';
import { Image, ViewStyle, ImageStyle } from 'react-native';
import { TextMedium, BareButton } from '../../components-elements';
import { IImageGridItem } from '../ImageGridItem/ImageGridItem.interface';

const styleImageListItem: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: 6
};

const styleImageListItemImage: ImageStyle = {
  aspectRatio: 1,
  borderRadius: 15,
  marginLeft: 12,
  width: 40
};

const styleImageListItemText: ViewStyle = {
  marginLeft: 6
};

export const ImageListItem: FC<IImageGridItem> = ({
  id,
  name,
  imageUrlSmall,
  onClick,
  width
}) => (
  <BareButton
    style={{
      ...styleImageListItem,
      width
    }}
    onClick={() => {
      if (onClick) {
        onClick(id);
      }
    }}
    activeOpacity={ onClick ? 0.2 : 1 }
  >
    <Image style={ styleImageListItemImage } source={ { uri: imageUrlSmall } } />
    <TextMedium style={ styleImageListItemText }>
      { name }
    </TextMedium>
  </BareButton>
);
