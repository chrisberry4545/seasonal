import React, { FC } from 'react';

import './CurrentSeasonName.scss';

import { ICurrentSeasonName } from './CurrentSeasonName.interface';
import { SeasonNameView } from '../../components-layout';

export const CurrentSeasonName: FC<ICurrentSeasonName> = ({
  currentSeasonName,
  isLoading
}) => (
  !isLoading
    ? <SeasonNameView name={currentSeasonName} />
    : null
);
