import React, { Fragment, FC } from 'react';

import {
  IAllSeasonsProps
} from './AllSeasons.interface';
import {
  SwitchableGridOfList,
  SeasonNameView,
  TopLoadingSpinner
} from '../../components-layout';
import { FlatList } from 'react-native-gesture-handler';

export const AllSeasons: FC<IAllSeasonsProps> = ({
  isLoading,
  increaseNumberOfAllFoodSeasonsInView,
  onFoodClick,
  seasons,
  isListViewShown,
  onToggleListView
}) => (
  isLoading || !seasons
    ? <TopLoadingSpinner />
    :  <FlatList
        data={seasons}
        renderItem={({ item }) => (
          <Fragment>
            <SeasonNameView name={item.name} />
            <SwitchableGridOfList data={ item.food }
              onClick={ onFoodClick }
              isListViewShown={isListViewShown}
              onToggleListView={onToggleListView}
              />
          </Fragment>
        )}
        keyExtractor={(item) => item.name}
        onEndReached={increaseNumberOfAllFoodSeasonsInView}
        onEndReachedThreshold={2} />
);
