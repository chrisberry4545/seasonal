import React, { FC } from 'react';
import './AllSeasonsRecipes.scss';
import {
  IAllSeasonsRecipesProps
} from './AllSeasonsRecipes.interface';
import { SeasonNameView, ImageGrid } from '../../components-layout';
import { LoadingSpinner } from '@chrisb-dev/seasonal-shared-frontend-components';

import InfiniteScroll from 'react-infinite-scroller';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

export const AllSeasonsRecipes: FC<IAllSeasonsRecipesProps> = ({
  isCurrentTabRecipes,
  isLoading,
  onRecipeClick,
  seasons,
  hasMoreSeasonsInAllSeasonsView,
  increaseNumberOfAllSeasonsInView
}) => (
  isCurrentTabRecipes
    ? (
      isLoading
      ? <div className='c-all-seasons-recipes__loading-spinner-wrapper'>
          <LoadingSpinner />
        </div>
      : <div className='c-all-seasons-recipes'>
          <InfiniteScroll
            pageStart={0}
            loadMore={increaseNumberOfAllSeasonsInView}
            hasMore={hasMoreSeasonsInAllSeasonsView}
            loader={<LoadingSpinner key='all-seasons-spinner' />}>
          {
            seasons && seasons.map(({ name, recipes }) => (
              <div className='c-all-seasons-recipes__season' key={name}>
                <SeasonNameView name={name}></SeasonNameView>
                <DietaryFiltersConnector />
                <ImageGrid data={recipes}
                  onClick={onRecipeClick} skipAnimation={true} />
              </div>
            ))
          }
          </InfiniteScroll>
        </div>
    ) : null
);
