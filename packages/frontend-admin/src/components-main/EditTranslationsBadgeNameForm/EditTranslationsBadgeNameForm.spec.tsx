
import React from 'react';
import { EditTranslationsBadgeNameForm } from './EditTranslationsBadgeNameForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';

jest.mock('../../services', () => ({
  getOneTranslationsBadgeName: jest.fn(),
  updateTranslationsBadgeName: jest.fn()
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

describe('<EditTranslationsBadgeNameForm />', () => {
  let wrapper: ShallowWrapper;
  let mockGetOne: jest.SpyInstance;
  let mockUpdate: jest.SpyInstance;
  const item = {
    name: 'name'
  } as ITranslationsBadgeName;

  beforeEach(() => {
    mockGetOne = jest.spyOn(services, 'getOneTranslationsBadgeName')
      .mockResolvedValue(item);
    mockUpdate = jest.spyOn(services, 'updateTranslationsBadgeName')
      .mockResolvedValue({} as ITranslationsBadgeName);
    wrapper = shallow(
      <EditTranslationsBadgeNameForm />
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
