
import React from 'react';
import { EditCountryRecipeNameMapForm } from './EditCountryRecipeNameMapForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getOneCountryRecipeNameMap: jest.fn(),
  updateCountryRecipeNameMap: jest.fn()
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));
jest.mock('../BaseFormFood/BaseFormFood', () => ({
  BaseFormFood: () => 'BaseFormFood'
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'id' })
}));

describe('<EditCountryRecipeNameMapForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as ICountryRecipeNameMap;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getOneCountryRecipeNameMap')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateCountryRecipeNameMap')
      .mockResolvedValue({} as ICountryRecipeNameMap);
    wrapper = shallow(
      <EditCountryRecipeNameMapForm />
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
