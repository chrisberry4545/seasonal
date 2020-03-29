import React, { FC } from 'react';

import './WhyEatSeasonal.scss';

import {
  TextHeadingLarge
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  ISummaryColumnList,
  SummaryColumnList
} from '../../components-layout';

import columns from './why-eat-seasonal-columns.json';

const summaryColumns: ISummaryColumnList = {
  columns
};

export const WhyEatSeasonal: FC = () => (
  <div className='c-why-eat-seasonal' data-e2e='why-eat-seasonal-section'>
    <h2 className='c-why-eat-seasonal__heading'>
      <TextHeadingLarge>
        Why Eat Seasonal?
      </TextHeadingLarge>
    </h2>
    <SummaryColumnList {...summaryColumns} />
  </div>
);
