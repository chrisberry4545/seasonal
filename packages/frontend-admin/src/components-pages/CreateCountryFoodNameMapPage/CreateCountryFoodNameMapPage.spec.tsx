import React from 'react';
import { CreateCountryFoodNameMapPage } from './CreateCountryFoodNameMapPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateCountryFoodNameMapForm: () => 'CreateCountryFoodNameMapForm'
}));

describe('<CreateCountryFoodNameMapPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateCountryFoodNameMapPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
