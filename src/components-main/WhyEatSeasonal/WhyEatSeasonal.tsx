import React, { SFC } from 'react';

import './WhyEatSeasonal.scss';

import {
  TextHeadingLarge
} from '../../components-elements';

import {
  ISummaryColumnList,
  SummaryColumnList
} from '../../components-layout';

import columns from './why-eat-seasonal-columns.json';

const summaryColumns: ISummaryColumnList = {
  columns
};

export const WhyEatSeasonal: SFC<{}> = ({}) => (
  <div className='c-why-eat-seasonal'>
    <h2 className='c-why-eat-seasonal__heading'>
      <TextHeadingLarge>
        Why Eat Seasonal?
      </TextHeadingLarge>
    </h2>
    <SummaryColumnList {...summaryColumns} />
  </div>
);
