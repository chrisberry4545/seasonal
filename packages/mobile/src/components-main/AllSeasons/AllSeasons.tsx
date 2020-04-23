import React, { Fragment, FC } from 'react';

import {
  IAllSeasonsProps
} from './AllSeasons.interface';
import {
  SwitchableGridOrList,
  SeasonNameView,
  TopLoadingSpinner
} from '../../components-layout';
import { FlatList } from 'react-native-gesture-handler';

export const AllSeasons: FC<IAllSeasonsProps> = ({
  isLoading,
  increaseNumberOfAllSeasonsInView,
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
            <SwitchableGridOrList data={ item.food }
              onClick={ onFoodClick }
              isListViewShown={isListViewShown}
              onToggleListView={onToggleListView}
              />
          </Fragment>
        )}
        keyExtractor={(item) => item.name}
        onEndReached={increaseNumberOfAllSeasonsInView}
        onEndReachedThreshold={2} />
);
