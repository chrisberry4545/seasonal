import React from 'react';
import { EditFoodPage } from './EditFoodPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditFoodForm: () => 'EditFoodForm'
}));

describe('<EditFoodPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditFoodPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
