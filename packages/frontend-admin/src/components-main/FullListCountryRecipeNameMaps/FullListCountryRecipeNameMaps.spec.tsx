import React from 'react';
import { FullListCountryRecipeNameMaps, ICountryRecipeNameMapViewItem } from './FullListCountryRecipeNameMaps';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry, IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    COUNTRY_RECIPE_NAME_MAP: 'country-recipe-name-map',
    EDIT: 'edit'
  }
}));
jest.mock('../../services', () => ({
  deleteCountryToRecipeNameMap: jest.fn(),
  getAllCountries: jest.fn(),
  getAllCountryRecipeNameMap: jest.fn(),
  getAllRecipes: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListCountryRecipeNameMaps', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListCountryRecipeNameMaps />
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
      name: 'name',
      recipeId: 'r1',
      recipeName: 'recipe1'
    } as ICountryRecipeNameMapViewItem;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteCountryToRecipeNameMap')
        .mockResolvedValue(item);
      jest.spyOn(services, 'getAllCountryRecipeNameMap')
        .mockResolvedValue([item]);
      jest.spyOn(services, 'getAllCountries')
        .mockResolvedValue([{
          id: 'c1', name: 'country1'
        }] as ICountry[]);
      jest.spyOn(services, 'getAllRecipes')
        .mockResolvedValue([{
          id: 'r1', name: 'recipe1'
        }] as IRecipe[]);
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
      expect(getFullListProps().getItemName(item)).toBe('country1 - recipe1 - name'));

    test('getItemEditUrl returns the expected url', () =>
      expect(getFullListProps().getItemEditUrl(item)).toBe(
        'country-recipe-name-map/edit/id'
      ));

    describe('when delete is pressed', () => {
      beforeEach(async () => await getFullListProps().deleteItemFunc(item));

      test('calls delete', () =>
        expect(mockDelete).toHaveBeenCalledWith(item.id));

      test('calls reload', () => expect(mockReload).toHaveBeenCalled());

    });
  });

});
