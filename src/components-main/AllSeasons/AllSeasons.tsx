import React, { SFC } from 'react';
import './AllSeasons.scss';
import {
  IAllSeasonsProps
} from './AllSeasons.interface';
import { SeasonNameView, ImageGrid } from '../../components-layout';
import { LoadingSpinner } from '../../components-elements';

import InfiniteScroll from 'react-infinite-scroller';

export const AllSeasons: SFC<IAllSeasonsProps> = ({
  isLoading,
  onFoodClick,
  seasons,
  hasMoreSeasonsInAllSeasonsView,
  increaseNumberOfAllFoodSeasonsInView
}) => (
  isLoading
  ? <div className='c-all-seasons__loading-spinner-wrapper'>
    <LoadingSpinner />
  </div>
  : <div className='c-all-seasons'>
    <InfiniteScroll
      pageStart={0}
      loadMore={increaseNumberOfAllFoodSeasonsInView}
      hasMore={hasMoreSeasonsInAllSeasonsView}
      loader={<LoadingSpinner key='all-seasons-spinner' />}>
    {
      seasons && seasons.map(({ name, food }) => (
        <div className='c-all-seasons__season' key={name}>
          <SeasonNameView name={name}></SeasonNameView>
          <ImageGrid data={food}
            onClick={onFoodClick} skipAnimation={true} />
        </div>
      ))
    }
    </InfiniteScroll>
  </div>
);
