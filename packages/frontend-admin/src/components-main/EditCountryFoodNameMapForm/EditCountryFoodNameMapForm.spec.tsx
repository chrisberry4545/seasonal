
import React from 'react';
import { EditCountryFoodNameMapForm } from './EditCountryFoodNameMapForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getSingleCountryFoodNameMap: jest.fn(),
  updateCountryFoodNameMap: jest.fn()
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

describe('<EditCountryFoodNameMapForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as ICountryFoodNameMap;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getSingleCountryFoodNameMap')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateCountryFoodNameMap')
      .mockResolvedValue({} as ICountryFoodNameMap);
    wrapper = shallow(
      <EditCountryFoodNameMapForm />
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
