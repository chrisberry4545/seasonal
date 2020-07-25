import React from 'react';
import {
  FullListTranslationsCountryNames,
  ITranslationsCountryNameViewItem
} from './FullListTranslationsCountryNames';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    EDIT: 'edit',
    TRANSLATIONS_COUNTRY_NAME: 'translations'
  }
}));
jest.mock('../../services', () => ({
  deleteTranslationsCountryName: jest.fn(),
  getAllCountries: jest.fn(),
  getAllTranslationsCountryNames: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListTranslationsCountryNames', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListTranslationsCountryNames />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('the inner component', () => {
    let innerWrapper: ShallowWrapper;
    let mockReload: jest.Mock;
    let mockDelete: jest.SpyInstance;
    const item = {
      countryId: 'c1',
      countryName: 'country1',
      id: 'id',
      languages: ['en-GB'],
      name: 'name'
    } as ITranslationsCountryNameViewItem;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteTranslationsCountryName')
        .mockResolvedValue(item);
      jest.spyOn(services, 'getAllTranslationsCountryNames')
        .mockResolvedValue([item]);
      jest.spyOn(services, 'getAllCountries')
        .mockResolvedValue([{
          id: 'c1', name: 'country1'
        }] as ICountry[]);
      mockDelete.mockClear();
      const {
        InnerComponent,
        requestDataMethod
      } = wrapper.find(GetAuthorizedBackendData).first().props();
      innerWrapper = shallow(
        <InnerComponent items={await requestDataMethod()} reload={mockReload} />
      );

    });

    test('renders correctly', () => expect(innerWrapper).toMatchSnapshot());

    test('getItemId returns the items id', () =>
      expect(getFullListProps().getItemId(item)).toBe('id'));

    test('getItemName returns the items name', () =>
      expect(getFullListProps().getItemName(item)).toBe('country1 - en-GB - name'));

    test('getItemEditUrl returns the expected url', () =>
      expect(getFullListProps().getItemEditUrl(item)).toBe(
        'translations/edit/id'
      ));

    describe('when delete is pressed', () => {
      beforeEach(async () => await getFullListProps().deleteItemFunc(item));

      test('calls delete', () =>
        expect(mockDelete).toHaveBeenCalledWith(item.id));

      test('calls reload', () => expect(mockReload).toHaveBeenCalled());

    });
  });

});
