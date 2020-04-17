import React from 'react';
import { FoodDetailsLoader } from './FoodDetailsLoader';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-layout', () => ({
  TopLoadingSpinner: () => 'TopLoadingSpinner'
}));

describe('<FoodDetailsLoader />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FoodDetailsLoader
        isLoading={true}/>
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('does not render anything when not loading', () => {
    wrapper = shallow(
      <FoodDetailsLoader
        isLoading={false} />
    );
    expect(wrapper.children().exists()).toBe(false);
  });
});
