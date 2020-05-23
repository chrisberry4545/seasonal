import React from 'react';
import { CreateRecipeForm } from './CreateRecipeForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormRecipe
} from '../BaseFormRecipe/BaseFormRecipe';

jest.mock('../../services', () => ({
  createRecipe: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormRecipe/BaseFormRecipe', () => ({
  BaseFormRecipe: () => 'BaseFormRecipe'
}));

describe('<CreateRecipeForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createRecipe')
      .mockResolvedValue({} as IRecipe);
    wrapper = shallow(
      <CreateRecipeForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as IRecipe;
    const update = wrapper.find(BaseFormRecipe).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
