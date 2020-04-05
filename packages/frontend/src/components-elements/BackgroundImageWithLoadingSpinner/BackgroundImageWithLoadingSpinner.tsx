import React, { useState, FC, useEffect } from 'react';

import './BackgroundImageWithLoadingSpinner.scss';

import {
  loadImage
} from '../../services/image-loader.service';

import {
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  makePromiseCancelable
} from '../../helpers';

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
