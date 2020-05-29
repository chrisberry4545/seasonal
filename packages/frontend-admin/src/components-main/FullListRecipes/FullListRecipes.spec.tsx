import React from 'react';
import { FullListRecipes } from './FullListRecipes';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    EDIT: 'edit',
    RECIPE: 'recipe'
  }
}));
jest.mock('../../services', () => ({
  deleteRecipe: jest.fn(),
  getAllRecipes: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListRecipes', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListRecipes />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('the inner component', () => {
    let innerWrapper: ShallowWrapper;
    let mockReload: jest.Mock;
    let mockDelete: jest.SpyInstance;
    const item = {
      id: 'id',
      name: 'name'
    } as IRecipe;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteRecipe')
        .mockResolvedValue(item);
      jest.spyOn(services, 'getAllRecipes')
        .mockResolvedValue([item]);
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
      expect(getFullListProps().getItemName(item)).toBe('name'));

    test('getItemEditUrl returns the expected url', () =>
      expect(getFullListProps().getItemEditUrl(item)).toBe(
        'recipe/edit/id'
      ));

    describe('when delete is pressed', () => {
      beforeEach(async () => await getFullListProps().deleteItemFunc(item));

      test('calls delete', () =>
        expect(mockDelete).toHaveBeenCalledWith(item.id));

      test('calls reload', () => expect(mockReload).toHaveBeenCalled());

    });
  });

});
