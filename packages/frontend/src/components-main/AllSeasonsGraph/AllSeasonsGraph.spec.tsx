
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AllSeasonsGraph } from './AllSeasonsGraph';
import { IAllSeasonsGraphData } from '@chrisb-dev/seasonal-shared-models';

jest.mock('recharts', () => ({
  Bar: () => 'Bar',
  BarChart: () => 'BarChart',
  ResponsiveContainer: () => 'ResponsiveContainer',
  Tooltip: () => 'Tooltip',
  XAxis: () => 'XAxis',
  YAxis: () => 'YAxis'
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  TextHeadingMedium: () => 'TextHeadingMedium',
  TextMedium: () => 'TextMedium'
}));

describe('<AllSeasonsGraph />', () => {
  let wrapper: ShallowWrapper;
  const foodInSeasonGraphData = [{}] as IAllSeasonsGraphData[];

  describe('when there is graph data', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsGraph
          foodInSeasonGraphData={foodInSeasonGraphData}
          isCurrentTabFood={true} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  });

  describe('when the current tab is not the food tab', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsGraph
          foodInSeasonGraphData={foodInSeasonGraphData}
          isCurrentTabFood={false} />
      )
    );

    test('does not display anything', () =>
      expect(wrapper.children().exists()).toBe(false));

  });

  describe('when there is no graph data', () => {
    beforeEach(() =>
      wrapper = shallow(
        <AllSeasonsGraph
          foodInSeasonGraphData={undefined}
          isCurrentTabFood={true}/>
      )
    );

    test('does not display anything', () =>
      expect(wrapper.children().exists()).toBe(false));

  });

});
