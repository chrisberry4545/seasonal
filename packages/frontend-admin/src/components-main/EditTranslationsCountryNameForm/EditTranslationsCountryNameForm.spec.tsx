
import React from 'react';
import { EditTranslationsCountryNameForm } from './EditTranslationsCountryNameForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getOneTranslationsCountryName: jest.fn(),
  updateTranslationsCountryName: jest.fn()
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

describe('<EditTranslationsCountryNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as ITranslationsCountryName;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getOneTranslationsCountryName')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateTranslationsCountryName')
      .mockResolvedValue({} as ITranslationsCountryName);
    wrapper = shallow(
      <EditTranslationsCountryNameForm />
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
