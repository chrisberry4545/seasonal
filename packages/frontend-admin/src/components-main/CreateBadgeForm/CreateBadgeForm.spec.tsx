import React from 'react';
import { CreateBadgeForm } from './CreateBadgeForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { BaseFormBadge } from '../BaseFormBadge/BaseFormBadge';

jest.mock('../../services', () => ({
  createBadge: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormBadge/BaseFormBadge', () => ({
  BaseFormBadge: () => 'BaseFormBadge'
}));

describe('<CreateBadgeForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createBadge')
      .mockResolvedValue({} as IBadge);
    wrapper = shallow(
      <CreateBadgeForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as IBadge;
    const update = wrapper.find(BaseFormBadge).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
