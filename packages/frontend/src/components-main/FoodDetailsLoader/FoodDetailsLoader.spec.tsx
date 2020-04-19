
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodDetailsLoader } from './FoodDetailsLoader';

jest.mock('@chrisb-dev/seasonal-shared-frontend-components', () => ({
  LoadingSpinner: () => 'LoadingSpinner'
}));

describe('<FoodDetailsLoader />', () => {
  let wrapper: ShallowWrapper;

  describe('when the food details is loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodDetailsLoader
          isLoading={true} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('when the food details is not loading', () => {
    beforeEach(() =>
      wrapper = shallow(
        <FoodDetailsLoader
          isLoading={false} />
      )
    );

    test('does not render anything', () =>
      expect(wrapper.children().exists()).toBe(false));
  });

});
