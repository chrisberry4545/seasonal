import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  CreateTranslationsBadgeNameForm
} from './CreateTranslationsBadgeNameForm';
import {
  BaseFormTranslationsBadgeName
} from '../BaseFormTranslationsBadgeName/BaseFormTranslationsBadgeName';

jest.mock('../../services', () => ({
  createTranslationsBadgeName: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormTranslationsBadgeName/BaseFormTranslationsBadgeName', () => ({
  BaseFormTranslationsBadgeName: () => 'BaseFormTranslationsBadgeName'
}));

describe('<CreateTranslationsBadgeNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createTranslationsBadgeName')
      .mockResolvedValue({} as ITranslationsBadgeName);
    wrapper = shallow(
      <CreateTranslationsBadgeNameForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as ITranslationsBadgeName;
    const update = wrapper.find(BaseFormTranslationsBadgeName).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
