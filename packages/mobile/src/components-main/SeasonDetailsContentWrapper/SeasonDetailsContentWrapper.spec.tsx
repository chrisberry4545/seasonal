import React from 'react';
import { SeasonDetailsContentWrapper } from './SeasonDetailsContentWrapper';
import { shallow, ShallowWrapper } from 'enzyme';
import { TopLoadingSpinner } from '../../components-layout';

jest.mock('../Header/Header.connector', () => ({
  HeaderConnecter: () => 'HeaderConnecter'
}));
jest.mock('../../components-layout', () => ({
  MainContainer: () => 'MainContainer',
  SeasonNameView: () => 'SeasonNameView',
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<SeasonDetailsContentWrapper />', () => {
  let wrapper: ShallowWrapper;

  describe('when it is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonDetailsContentWrapper
          isLoading={false}
          currentSeasonName='January'>
            Children
        </SeasonDetailsContentWrapper>
      )
    );

    test('renders correctly', () =>
      expect(wrapper).toMatchSnapshot());
  });

  describe('when it is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SeasonDetailsContentWrapper
          isLoading={true}
          currentSeasonName='January'>
            Children
        </SeasonDetailsContentWrapper>
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(TopLoadingSpinner).exists()).toBe(true));

  });

});
