import React, { FC } from 'react';
import './AllSeasonsFood.scss';
import {
  IAllSeasonsFoodProps
} from './AllSeasonsFood.interface';
import { SeasonNameView, ImageGrid } from '../../components-layout';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';

import InfiniteScroll from 'react-infinite-scroller';

export const AllSeasonsFood: FC<IAllSeasonsFoodProps> = ({
  isCurrentTabFood,
  isLoading,
  onFoodClick,
  seasons,
  hasMoreSeasonsInAllSeasonsView,
  increaseNumberOfAllSeasonsInView
}) => (
  isCurrentTabFood
    ? (
      isLoading
        ? <div className='c-all-seasons-food__loading-spinner-wrapper'>
          <LoadingSpinner />
          </div>
        : <div className='c-all-seasons-food'>
          <InfiniteScroll
            pageStart={0}
            loadMore={increaseNumberOfAllSeasonsInView}
            hasMore={hasMoreSeasonsInAllSeasonsView}
            loader={<LoadingSpinner key='all-seasons-spinner' />}>
          {
            seasons && seasons.map(({ name, food }) => (
              <div className='c-all-seasons-food__season' key={name}>
                <SeasonNameView name={name}></SeasonNameView>
                <ImageGrid data={food}
                  onClick={onFoodClick} skipAnimation={true} />
              </div>
            ))
          }
          </InfiniteScroll>
        </div>
    )
    : null
);
