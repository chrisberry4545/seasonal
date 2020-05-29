import React from 'react';
import { CreateRecipePage } from './CreateRecipePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateRecipeForm: () => 'CreateRecipeForm'
}));

describe('<CreateRecipePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateRecipePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
