
import React from 'react';
import { EditBadgeForm } from './EditBadgeForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getOneBadge: jest.fn(),
  updateBadge: jest.fn()
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));
jest.mock('../BaseFormCountry/BaseFormCountry', () => ({
  BaseFormCountry: () => 'BaseFormCountry'
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'id' })
}));

describe('<EditBadgeForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as IBadge;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getOneBadge')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateBadge')
      .mockResolvedValue({} as IBadge);
    wrapper = shallow(
      <EditBadgeForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('can get the item data', async () => {
    await wrapper.find(GetAuthorizedBackendData).props().requestDataMethod();
    expect(mockGetOne).toHaveBeenCalledWith('id');
  });

  test('can update the item', () => {
    const update = wrapper.find(GetAuthorizedBackendData).props().updateMethod;
    if (update) {
      update(item);
    }
    expect(mockUpdate).toHaveBeenCalledWith(item);
  });

});
