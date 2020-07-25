import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  CreateTranslationsCountryNameForm
} from './CreateTranslationsCountryNameForm';
import {
  BaseFormTranslationsCountryName
} from '../BaseFormTranslationsCountryName/BaseFormTranslationsCountryName';

jest.mock('../../services', () => ({
  createTranslationsCountryName: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormTranslationsCountryName/BaseFormTranslationsCountryName', () => ({
  BaseFormTranslationsCountryName: () => 'BaseFormTranslationsCountryName'
}));

describe('<CreateTranslationsCountryNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createTranslationsCountryName')
      .mockResolvedValue({} as ITranslationsCountryName);
    wrapper = shallow(
      <CreateTranslationsCountryNameForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ITranslationsCountryName;
    const update = wrapper.find(BaseFormTranslationsCountryName).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
