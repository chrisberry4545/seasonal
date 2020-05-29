import React from 'react';
import { ReportFoodWithNoRecipesPage } from './ReportFoodWithNoRecipesPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  ReportFoodWithNoRecipes: () => 'ReportFoodWithNoRecipes'
}));

describe('<ReportFoodWithNoRecipesPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ReportFoodWithNoRecipesPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
