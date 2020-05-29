import React from 'react';
import { CreateRegionForm } from './CreateRegionForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import {
  BaseFormRegion
} from '../BaseFormRegion/BaseFormRegion';

jest.mock('../../services', () => ({
  createRegion: jest.fn()
}));
jest.mock('../../consts', () => ({
  FORM_BUTTON_TEXT: {
    CREATE: 'create'
  }
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../BaseFormRegion/BaseFormRegion', () => ({
  BaseFormRegion: () => 'BaseFormRegion'
}));

describe('<CreateRegionForm />', () => {
  let wrapper: ShallowWrapper;
  let mockCreate: jest.SpyInstance;

  beforeEach(() => {
    mockCreate = jest.spyOn(services, 'createRegion')
      .mockResolvedValue({} as IDbRegion);
    wrapper = shallow(
      <CreateRegionForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('calls create on update', () => {
    const item = {} as IDbRegion;
    const update = wrapper.find(BaseFormRegion).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockCreate).toHaveBeenCalledWith(item);
  });

});
