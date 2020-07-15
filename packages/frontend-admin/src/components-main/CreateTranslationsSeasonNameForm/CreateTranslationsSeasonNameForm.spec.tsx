import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  CreateTranslationsSeasonNameForm
} from './CreateTranslationsSeasonNameForm';
import {
  BaseFormTranslationsSeasonName
} from '../BaseFormTranslationsSeasonName/BaseFormTranslationsSeasonName';

jest.mock('../../services', () => ({
  createTranslationsSeasonName: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormTranslationsSeasonName/BaseFormTranslationsSeasonName', () => ({
  BaseFormTranslationsSeasonName: () => 'BaseFormTranslationsSeasonName'
}));

describe('<CreateTranslationsSeasonNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createTranslationsSeasonName')
      .mockResolvedValue({} as ITranslationsSeasonName);
    wrapper = shallow(
      <CreateTranslationsSeasonNameForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ITranslationsSeasonName;
    const update = wrapper.find(BaseFormTranslationsSeasonName).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
