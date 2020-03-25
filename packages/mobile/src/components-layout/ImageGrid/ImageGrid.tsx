import React, { FC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';

import { IImageGrid } from './ImageGrid.interface';

import { ImageGridItem } from '../ImageGridItem/ImageGridItem';
import { TextMedium } from '../../components-elements';
import { getScreenWidth } from '../../helpers';

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

export const ImageGrid: FC<IImageGrid> = ({
  data,
  onClick,
  noResultsMessage
}) => {
  const screenWidth = getScreenWidth();

  const numberPerRow =
    screenWidth < 500 ? 2
    : screenWidth < 700 ? 3
    : screenWidth < 1000 ? 4
    : 5;
  const isFirstInRow = (index: number) =>
    index % numberPerRow === 0;
  const isLastInRow = (index: number) =>
    index !== 0
      && index % numberPerRow === (numberPerRow - 1);
  const isNotInLastRow = (index: number) => {
    const length = data ? data.length : 0;
    const numberInLastRow = length % numberPerRow;
    return index < (length - numberInLastRow);
  };

  const getPaddingLeft = (index: number) =>
    isFirstInRow(index) ? 0 : 0;
  const padding = 10 / numberPerRow;
  const getPaddingRight = (index: number) =>
    isLastInRow(index) ? 0 : `${padding}%`;
  const getWidth = (index: number) =>
    `${
      (100 - (isLastInRow(index) ? (padding * numberPerRow) : 0))
      / numberPerRow
    }%`;

  return <View style={ {
    ...styleImageGrid,
    marginLeft: `${padding}%`
  } }>
    {
      data && data.length > 0
        ? data.map((item, index) => (
          <ImageGridItem
            { ...item }
            key={item.id}
            paddingLeft={getPaddingLeft(index)}
            paddingRight={getPaddingRight(index)}
            onClick={onClick}
            hasBottomBorder={isNotInLastRow(index)}
            width={getWidth(index)}/>
        ))
        : noResultsMessage
          ? <TextMedium
              style={ styleImageGridNoResults }>
              { noResultsMessage }
            </TextMedium>
          : null
    }
  </View>;
};
