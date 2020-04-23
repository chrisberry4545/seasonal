import React, { FC } from 'react';
import './AllSeasonsGraph.scss';
import {
  IAllSeasonsGraphInputProps
} from './AllSeasonsGraph.interface';
import {
  BarChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  YAxis
} from 'recharts';
import {
  TextHeadingMedium,
  TextMedium
} from '@chrisb-dev/seasonal-shared-frontend-components';

export const AllSeasonsGraph: FC<IAllSeasonsGraphInputProps> = ({
  foodInSeasonGraphData,
  isCurrentTabFood
}) => (
  (foodInSeasonGraphData && isCurrentTabFood)
    ? <div className='c-all-seasons-graph'>
        <TextHeadingMedium className='c-all-seasons-graph__heading'>
          Number of food items in seasons
        </TextHeadingMedium>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={foodInSeasonGraphData}>
            <XAxis dataKey='name' />
            <YAxis
              dataKey='Number of food items in season'
              allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='Number of food items in season' fill='#5CB5CD' />
          </BarChart>
        </ResponsiveContainer>
        <TextMedium className='c-all-seasons-graph__text'>
          Enter some text in the search bar to find when certain items are in season
        </TextMedium>
      </div>
    : null
);
