import React from 'react';
import { EditRecipePage } from './EditRecipePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditRecipeForm: () => 'EditRecipeForm'
}));

describe('<EditRecipePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditRecipePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
