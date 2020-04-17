import React from 'react';
import { SelectLocation } from './SelectLocation';
import { shallow, ShallowWrapper } from 'enzyme';
import { TopLoadingSpinner } from '../../components-layout';

jest.mock('../SelectRegion/SelectRegion.connector', () => ({
  SelectRegionConnecter: () => 'SelectRegionConnecter'
}));
jest.mock('../../components-layout', () => ({
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<SelectLocation />', () => {
  let wrapper: ShallowWrapper;

  describe('when it is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SelectLocation
          isLoading={false}>
            Children
        </SelectLocation>
      )
    );

    test('renders correctly', () =>
      expect(wrapper).toMatchSnapshot());

  });

  describe('when it is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SelectLocation
          isLoading={true}>
            Children
        </SelectLocation>
      )
    );

    test('shows a loading spinner', () =>
      expect(wrapper.find(TopLoadingSpinner).exists()).toBe(true));

  });

});
