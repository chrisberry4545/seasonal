
import React from 'react';
import { CreateUserForm } from './CreateUserForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormUser
} from '../BaseFormUser/BaseFormUser';

jest.mock('../../services', () => ({
  createUser: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormUser/BaseFormUser', () => ({
  BaseFormUser: () => 'BaseFormUser'
}));

describe('<CreateUserForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createUser')
      .mockResolvedValue({} as IUser);
    wrapper = shallow(
      <CreateUserForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as IUser;
    const update = wrapper.find(BaseFormUser).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
