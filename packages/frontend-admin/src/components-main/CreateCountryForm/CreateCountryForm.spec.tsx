import React from 'react';
import { CreateCountryForm } from './CreateCountryForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormCountry
} from '../BaseFormCountry/BaseFormCountry';

jest.mock('../../services', () => ({
  createCountry: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormCountry/BaseFormCountry', () => ({
  BaseFormCountry: () => 'BaseFormCountry'
}));

describe('<CreateCountryForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createCountry')
      .mockResolvedValue({} as ICountry);
    wrapper = shallow(
      <CreateCountryForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ICountry;
    const update = wrapper.find(BaseFormCountry).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
