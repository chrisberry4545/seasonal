
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FoodDetailsLoader } from './FoodDetailsLoader';

jest.mock('../../components-layout', () => ({
  CentralLoadingSpinner: () => 'CentralLoadingSpinner'
}));

describe('<FoodDetailsLoader />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FoodDetailsLoader
        isLoading={true} />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
