import React from 'react';
import { ViewRecipesPage } from './ViewRecipesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListRecipes: () => 'FullListRecipes'
}));

describe('<ViewRecipesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewRecipesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
