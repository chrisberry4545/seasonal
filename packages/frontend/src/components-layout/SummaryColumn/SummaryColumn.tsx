import React, { FC } from 'react';

import './SummaryColumn.scss';

import {
  TextMedium,
  TextHeadingSmall
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  ISummaryColumn
} from './SummaryColumn.interface';

export const SummaryColumn: FC<ISummaryColumn> = ({
  imageUrl,
  text,
  title
}) => (
  <div className='c-summary-column'>
    {
      imageUrl && <img src={imageUrl} className='c-summary-column__image' />
    }
    <h3 className='c-summary-column__heading'>
      <TextHeadingSmall>
        { title }
      </TextHeadingSmall>
    </h3>
    <TextMedium>
      { text }
    </TextMedium>
  </div>
);
