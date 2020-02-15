import React, { FC } from 'react';
import './SeasonNameView.scss';
import {
  ISeasonNameViewProps
} from './SeasonNameView.interface';
import { TextHeadingSmall } from '@chrisb-dev/seasonal-shared-frontend-components';

export const SeasonNameView: FC<ISeasonNameViewProps> = ({
  name
}) => (
  <TextHeadingSmall className='c-season-name-view'>
    {name}
  </TextHeadingSmall>
);
