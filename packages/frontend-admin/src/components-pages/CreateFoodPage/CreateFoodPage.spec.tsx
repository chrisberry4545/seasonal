import React from 'react';
import { CreateFoodPage } from './CreateFoodPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateFoodForm: () => 'CreateFoodForm'
}));

describe('<CreateFoodPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateFoodPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
