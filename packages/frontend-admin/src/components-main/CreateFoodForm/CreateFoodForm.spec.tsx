import React from 'react';
import { CreateFoodForm } from './CreateFoodForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormFood
} from '../BaseFormFood/BaseFormFood';

jest.mock('../../services', () => ({
  createFood: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormFood/BaseFormFood', () => ({
  BaseFormFood: () => 'BaseFormFood'
}));

describe('<CreateFoodForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createFood')
      .mockResolvedValue({} as IFood);
    wrapper = shallow(
      <CreateFoodForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as IFood;
    const update = wrapper.find(BaseFormFood).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
