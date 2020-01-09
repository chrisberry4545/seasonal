import React, { FC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';

import { IImageGrid } from './ImageGrid.interface';

import { ImageGridItem } from '../ImageGridItem/ImageGridItem';
import { TextMedium } from '../../components-elements';

const styleImageGrid: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: 8
};

const styleImageGridNoResults: TextStyle = {
  flex: 1,
  marginBottom: 40,
  marginTop: 20,
  textAlign: 'center'
};

const isEven = (index: number) => index % 2 === 0;

const hasBorder = (totalLength: number, index: number) =>
  index < totalLength - (isEven(totalLength) ? 2 : 1);

export const ImageGrid: FC<IImageGrid> = ({
  data,
  onClick,
  noResultsMessage
}) => (
  <View style={ styleImageGrid }>
    {
      data && data.length > 0
        ? data.map((item, index) => (
          <ImageGridItem
            { ...item }
            key={item.id}
            evenGridItem={isEven(index)}
            onClick={onClick}
            hasBottomBorder={hasBorder(data.length, index)} />
        ))
        : noResultsMessage
          ? <TextMedium
              style={ styleImageGridNoResults }>
              { noResultsMessage }
            </TextMedium>
          : null
    }
  </View>
);
