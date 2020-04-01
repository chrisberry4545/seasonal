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
  noResultsMessage
}) => {
  const screenWidth = getScreenWidth();

  const width =
    screenWidth < 500 ? '100%'
    : screenWidth < 700 ? '50%'
    : screenWidth < 1000 ? '33%'
    : '25%';

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
