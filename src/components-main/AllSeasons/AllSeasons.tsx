import React, { Fragment, FC } from 'react';

import {
  IAllSeasonsProps
} from './AllSeasons.interface';
import {
  ImageGrid,
  SeasonNameView,
  TopLoadingSpinner
} from '../../components-layout';
import { FlatList } from 'react-native-gesture-handler';

export const AllSeasons: FC<IAllSeasonsProps> = ({
  isLoading,
  increaseNumberOfAllFoodSeasonsInView,
  onFoodClick,
  seasons
}) => (
  isLoading || !seasons
    ? <TopLoadingSpinner />
    : <FlatList
        data={seasons}
        renderItem={({ item }) => (
          <Fragment>
            <SeasonNameView name={item.name} />
            <ImageGrid data={item.food} onClick={onFoodClick}
              noResultsMessage='No results found' />
          </Fragment>
        )}
        keyExtractor={(item) => item.name}
        onEndReached={increaseNumberOfAllFoodSeasonsInView}
        onEndReachedThreshold={2} />
);
