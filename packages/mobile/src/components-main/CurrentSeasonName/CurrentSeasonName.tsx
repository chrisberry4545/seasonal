import React, { FC } from 'react';

import { ICurrentSeasonName } from './CurrentSeasonName.interface';

import { SeasonNameView } from '../../components-layout';

export const CurrentSeasonName: FC<ICurrentSeasonName> = ({
  currentSeasonName
}) => (
  <SeasonNameView name={currentSeasonName} />
);
