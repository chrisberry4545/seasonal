import React, { Fragment, FC } from 'react';

import {
  SwitchableGridOrList,
  SeasonNameView,
  MainContainer
} from '../../components-layout';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderConnecter } from '../Header/Header.connector';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { LoadingSpinner } from '../../components-elements';
import { ViewStyle } from 'react-native';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

const styleAllSeasonsWrapperLoadingSpinner: ViewStyle = {
  paddingTop: 30
};

export const AllSeasonsWrapper: FC<{
  propName: 'food' | 'recipes',
  isLoading: boolean,
  increaseNumberOfAllSeasonsInView: () => void,
  onItemClick: (itemId: string) => void,
  seasons: IHydratedSeason[] | undefined,
  isListViewShown: boolean,
  onToggleListView: () => void
}> = ({
  propName,
  isLoading,
  increaseNumberOfAllSeasonsInView,
  onItemClick,
  seasons,
  isListViewShown,
  onToggleListView
}) => (
  <MainContainer>
    <HeaderConnecter />
    {
      isLoading || !seasons
        ? <LoadingSpinner style={styleAllSeasonsWrapperLoadingSpinner} />
        : <FlatList
          data={seasons}
          renderItem={({ item }) => (
            <Fragment>
              <SeasonNameView name={item.name} />
              { propName === 'recipes' && <DietaryFiltersConnector /> }
              <SwitchableGridOrList data={ item[propName] }
                onClick={ onItemClick }
                isListViewShown={isListViewShown}
                onToggleListView={onToggleListView}
                />
            </Fragment>
          )}
          keyExtractor={(item) => item.name}
          onEndReached={increaseNumberOfAllSeasonsInView}
          onEndReachedThreshold={2} />
    }
  </MainContainer>
);
