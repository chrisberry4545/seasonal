import React from 'react';
import { EditCountryRecipeNameMapPage } from './EditCountryRecipeNameMapPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditCountryRecipeNameMapForm: () => 'EditCountryRecipeNameMapForm'
}));

describe('<EditCountryRecipeNameMapPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditCountryRecipeNameMapPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
