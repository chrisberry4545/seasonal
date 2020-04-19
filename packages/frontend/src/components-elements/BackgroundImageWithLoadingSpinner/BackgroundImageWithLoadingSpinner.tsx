import React, { useState, useEffect, FC } from 'react';

import './BackgroundImageWithLoadingSpinner.scss';

import {
  makePromiseCancelable,
  loadImage
} from '../../helpers';
import {
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';

interface IBackgroundImageWithLoadingSpinnerPropsInterface {
  src: string;
  skipAnimation?: boolean;
}

export const BackgroundImageWithLoadingSpinner: FC<
  IBackgroundImageWithLoadingSpinnerPropsInterface
> = ({
  children,
  src,
  skipAnimation
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getBackgroundImageStyle = () => {
    return { backgroundImage: `url(${src})` };
  };

  useEffect(() => {
    const loadImagePromise = makePromiseCancelable(loadImage(src));
    loadImagePromise.promise
      .then(() => setIsVisible(true))
      .catch(() => undefined);
    return () => {
      if (loadImagePromise) {
        loadImagePromise.cancel();
      }
    };
  }, [src]);

  return !skipAnimation
    ? (
      isVisible
        ? <div key='background-image-fade-in-out'
          className='c-background-image-with-loading-spinner'
          style={getBackgroundImageStyle()}>
          { children }
        </div>
        : <div key='loading-spinner-fade-in-out'
          className='c-background-image-with-loading-spinner'>
          <LoadingSpinner />
        </div>
    )
    : <div className='c-background-image-with-loading-spinner'
        style={getBackgroundImageStyle()} />;
};
