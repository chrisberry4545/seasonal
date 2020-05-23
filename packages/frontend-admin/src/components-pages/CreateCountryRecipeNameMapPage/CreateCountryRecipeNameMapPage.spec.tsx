import React from 'react';
import { CreateCountryRecipeNameMapPage } from './CreateCountryRecipeNameMapPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateCountryRecipeNameMapForm: () => 'CreateCountryRecipeNameMapForm'
}));

describe('<CreateCountryRecipeNameMapPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateCountryRecipeNameMapPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
