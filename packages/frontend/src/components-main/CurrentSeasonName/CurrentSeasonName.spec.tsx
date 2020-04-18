
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CurrentSeasonName } from './CurrentSeasonName';

jest.mock('../../components-layout', () => ({
  SeasonNameView: () => 'SeasonNameView'
}));

describe('<CurrentSeasonName />', () => {
  let wrapper: ShallowWrapper;

  describe('when the current season is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <CurrentSeasonName
          currentSeasonName='January'
          isLoading={false} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when the current season is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <CurrentSeasonName
          currentSeasonName='January'
          isLoading={true} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
