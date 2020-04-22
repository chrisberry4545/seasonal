import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { IImageGrid } from '../ImageGrid/ImageGrid.interface';

import { getScreenWidth } from '../../helpers';
import { ImageListItem } from '../ImageListItem/ImageListItem';
import { NoResultsText } from '../NoResultsText/NoResultsText';

const styleImageList: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingBottom: 30,
  paddingTop: 8
};

export const ImageList: FC<IImageGrid> = ({
  data,
  onClick,
  noResultsMessage,
  maxItemsPerRow
}) => {
  const screenWidth = getScreenWidth();

  const numberPerRowForScreen =
    screenWidth < 500 ? 1
    : screenWidth < 700 ? 2
    : screenWidth < 1000 ? 3
    : 4;
  const numberPerRow = maxItemsPerRow
    ? Math.min(numberPerRowForScreen, maxItemsPerRow)
    : numberPerRowForScreen;

  const width = `${100 / numberPerRow}%`;

  return <View style={styleImageList}>
    {
      data && data.length > 0
        ? data.map((item) => (
          <ImageListItem
            { ...item }
            key={item.id}
            onClick={onClick}
            width={width} />
        ))
        : <NoResultsText text={noResultsMessage} />
    }
  </View>;
};
