import React from 'react';
import { ViewFoodPage } from './ViewFoodPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListFood: () => 'FullListFood'
}));

describe('<ViewFoodPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewFoodPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
