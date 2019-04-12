import React, { SFC } from 'react';

import './ImageGrid.scss';

import {
  ImageGridItem
} from '../ImageGridItem/ImageGridItem';
import { IImageGrid } from './ImageGrid.interface';
import { TextMedium } from '../../components-elements';

export const ImageGrid: SFC<IImageGrid> = ({
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
            skipAnimation={skipAnimation} />
        ))
        : <TextMedium className='c-image-grid__no-results'>
            No results found
          </TextMedium>
    }
  </div>
);
