import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  CreateTranslationsRegionNameForm
} from './CreateTranslationsRegionNameForm';
import {
  BaseFormTranslationsRegionName
} from '../BaseFormTranslationsRegionName/BaseFormTranslationsRegionName';

jest.mock('../../services', () => ({
  createTranslationsRegionName: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormTranslationsRegionName/BaseFormTranslationsRegionName', () => ({
  BaseFormTranslationsRegionName: () => 'BaseFormTranslationsRegionName'
}));

describe('<CreateTranslationsRegionNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createTranslationsRegionName')
      .mockResolvedValue({} as ITranslationsRegionName);
    wrapper = shallow(
      <CreateTranslationsRegionNameForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ITranslationsRegionName;
    const update = wrapper.find(BaseFormTranslationsRegionName).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
