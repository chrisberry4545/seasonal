
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { BadgesDetailsLoader } from './BadgesDetailsLoader';

jest.mock('../../components-layout', () => ({
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<BadgesDetailsLoader />', () => {
  let wrapper: ShallowWrapper;

  describe('when isLoading is false', () => {
    beforeEach(() =>
      wrapper = shallow(
        <BadgesDetailsLoader
          isLoading={true} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  });

  describe('when isLoading is true', () => {
    beforeEach(() =>
      wrapper = shallow(
        <BadgesDetailsLoader
          isLoading={false} />
      )
    );

    test('renders nothing', () =>
      expect(wrapper.children().exists()).toBe(false));

  });

});
