import React from 'react';
import { CreateCountryRecipeNameMapForm } from './CreateCountryRecipeNameMapForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormCountryRecipeNameMap
} from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';

jest.mock('../../services', () => ({
  createCountryRecipeNameMap: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap', () => ({
  BaseFormCountryRecipeNameMap: () => 'BaseFormCountryRecipeNameMap'
}));

describe('<CreateCountryRecipeNameMapForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createCountryRecipeNameMap')
      .mockResolvedValue({} as ICountryRecipeNameMap);
    wrapper = shallow(
      <CreateCountryRecipeNameMapForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ICountryRecipeNameMap;
    const update = wrapper.find(BaseFormCountryRecipeNameMap).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
