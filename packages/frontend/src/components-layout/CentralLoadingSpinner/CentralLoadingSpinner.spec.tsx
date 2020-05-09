
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CentralLoadingSpinner } from './CentralLoadingSpinner';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('<CentralLoadingSpinner />', () => {
  let wrapper: ShallowWrapper;

  describe('when is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <CentralLoadingSpinner
          isLoading={true} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when the not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <CentralLoadingSpinner
          isLoading={false} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
