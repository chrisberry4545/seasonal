import React from 'react';
import { FullListCountryFoodNameMaps, ICountryFoodNameMapViewItem } from './FullListCountryFoodNameMaps';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry, IFood } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    COUNTRY_FOOD_NAME_MAP: 'country-food-name-map',
    EDIT: 'edit'
  }
}));
jest.mock('../../services', () => ({
  deleteCountryToFoodNameMap: jest.fn(),
  getAllCountries: jest.fn(),
  getAllCountryFoodNameMap: jest.fn(),
  getAllFood: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListCountryFoodNameMaps', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListCountryFoodNameMaps />
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
      foodId: 'f1',
      foodName: 'food1',
      id: 'id',
      name: 'name'
    } as ICountryFoodNameMapViewItem;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteCountryToFoodNameMap')
        .mockResolvedValue(item);
      jest.spyOn(services, 'getAllCountryFoodNameMap')
        .mockResolvedValue([item]);
      jest.spyOn(services, 'getAllCountries')
        .mockResolvedValue([{
          id: 'c1', name: 'country1'
        }] as ICountry[]);
      jest.spyOn(services, 'getAllFood')
        .mockResolvedValue([{
          id: 'f1', name: 'food1'
        }] as IFood[]);
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

    test('getItemName returns the items username', () =>
      expect(getFullListProps().getItemName(item)).toBe('country1 - food1 - name'));

    test('getItemEditUrl returns the expected url', () =>
      expect(getFullListProps().getItemEditUrl(item)).toBe(
        'country-food-name-map/edit/id'
      ));

    describe('when delete is pressed', () => {
      beforeEach(async () => await getFullListProps().deleteItemFunc(item));

      test('calls delete', () =>
        expect(mockDelete).toHaveBeenCalledWith(item.id));

      test('calls reload', () => expect(mockReload).toHaveBeenCalled());

    });
  });

});
