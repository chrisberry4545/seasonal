import React, { FC } from 'react';
import './SeasonNameView.scss';
import {
  ISeasonNameViewProps
} from './SeasonNameView.interface';
import { TextHeadingSmall } from '../../components-elements';

export const SeasonNameView: FC<ISeasonNameViewProps> = ({
  name
}) => (
  <TextHeadingSmall className='c-season-name-view'>
    {name}
  </TextHeadingSmall>
);
