import React from 'react';
import { EditCountryFoodNameMapPage } from './EditCountryFoodNameMapPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditCountryFoodNameMapForm: () => 'EditCountryFoodNameMapForm'
}));

describe('<EditCountryFoodNameMapPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditCountryFoodNameMapPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
