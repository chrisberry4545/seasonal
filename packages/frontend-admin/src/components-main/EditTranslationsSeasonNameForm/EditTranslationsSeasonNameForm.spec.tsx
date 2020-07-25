
import React from 'react';
import { EditTranslationsSeasonNameForm } from './EditTranslationsSeasonNameForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getOneTranslationsSeasonName: jest.fn(),
  updateTranslationsSeasonName: jest.fn()
}));
jest.mock('../../components-layouts', () => ({
  LayoutWithTitle: () => 'LayoutWithTitle'
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));
jest.mock('../BaseFormTranslationsCountryName/BaseFormTranslationsCountryName', () => ({
  BaseFormTranslationsCountryName: () => 'BaseFormTranslationsCountryName'
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'id' })
}));

describe('<EditTranslationsSeasonNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as ITranslationsSeasonName;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getOneTranslationsSeasonName')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateTranslationsSeasonName')
      .mockResolvedValue({} as ITranslationsSeasonName);
    wrapper = shallow(
      <EditTranslationsSeasonNameForm />
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
