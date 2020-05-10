import React, { FC } from 'react';
import {
  IBadgesDetailsLoaderInputProps
} from './BadgesDetailsLoader.interface';
import { TopLoadingSpinner } from '../../components-layout';

export const BadgesDetailsLoader: FC<IBadgesDetailsLoaderInputProps> = ({
  isLoading
}) => isLoading ? <TopLoadingSpinner /> : null;
