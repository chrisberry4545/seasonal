import React from 'react';
import { CreateCountryFoodNameMapForm } from './CreateCountryFoodNameMapForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormCountryFoodNameMap
} from '../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap';

jest.mock('../../services', () => ({
  createCountryFoodNameMap: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap', () => ({
  BaseFormCountryFoodNameMap: () => 'BaseFormCountryFoodNameMap'
}));

describe('<CreateCountryFoodNameMapForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createCountryFoodNameMap')
      .mockResolvedValue({} as ICountryFoodNameMap);
    wrapper = shallow(
      <CreateCountryFoodNameMapForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ICountryFoodNameMap;
    const update = wrapper.find(BaseFormCountryFoodNameMap).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
