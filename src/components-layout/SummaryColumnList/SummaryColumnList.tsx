import React, { SFC } from 'react';

import './SummaryColumnList.scss';

import {
  SummaryColumn
} from './../SummaryColumn';

import {
  ISummaryColumnList
} from './SummaryColumnList.interface';

export const SummaryColumnList: SFC<ISummaryColumnList> = ({
  columns
}) => (
  <ul className='c-summary-column-list'>
    {
      columns.map((column, index) => (
        <SummaryColumn {...column} key={index} />
      ))
    }
  </ul>
);
