import React, { FC } from 'react';

import './ImageGrid.scss';

import {
  ImageGridItem
} from '../ImageGridItem/ImageGridItem';
import { IImageGrid } from './ImageGrid.interface';
import { TextMedium } from '@chrisb-dev/seasonal-shared-frontend-components';

export const ImageGrid: FC<IImageGrid> = ({
  data,
  onClick,
  skipAnimation
}) => (
  <div className='c-image-grid'>
    {
      data && data.length
        ? data.map((item) => (
          <ImageGridItem
            key={item.name}
            {...item}
            onClick={onClick}
            skipAnimation={skipAnimation}/>
        ))
        : <TextMedium className='c-image-grid__no-results'>
            No results found
          </TextMedium>
    }
  </div>
);
