import React, { FC } from 'react';
import {
  IBadgesDetailsLoaderInputProps
} from './BadgesDetailsLoader.interface';
import { CentralLoadingSpinner } from '../../components-layout';

export const BadgesDetailsLoader: FC<IBadgesDetailsLoaderInputProps> = ({
  isLoading
}) => <CentralLoadingSpinner isLoading={isLoading} />;
