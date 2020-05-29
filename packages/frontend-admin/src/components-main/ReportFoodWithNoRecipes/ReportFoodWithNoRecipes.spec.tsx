import React from 'react';
import { ReportFoodWithNoRecipes } from './ReportFoodWithNoRecipes';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    EDIT: 'edit',
    FOOD: 'food'
  }
}));
jest.mock('../../services', () => ({
  deleteFood: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('ReportFoodWithNoRecipes', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ReportFoodWithNoRecipes />
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
    } as IFood;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(() => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteFood')
        .mockResolvedValue(item);
      mockDelete.mockClear();
      const InnerComponent =
        wrapper.find(GetAuthorizedBackendData).first().props().InnerComponent;
      innerWrapper = shallow(
        <InnerComponent items={[item]} reload={mockReload} />
      );

    });

    test('renders correctly', () => expect(innerWrapper).toMatchSnapshot());

    test('getItemId returns the items id', () =>
      expect(getFullListProps().getItemId(item)).toBe('id'));

    test('getItemName returns the items name', () =>
      expect(getFullListProps().getItemName(item)).toBe('name'));

    test('getItemEditUrl returns the expected url', () =>
      expect(getFullListProps().getItemEditUrl(item)).toBe(
        'food/edit/id'
      ));

    describe('when delete is pressed', () => {
      beforeEach(async () => await getFullListProps().deleteItemFunc(item));

      test('calls delete', () =>
        expect(mockDelete).toHaveBeenCalledWith(item.id));

      test('calls reload', () => expect(mockReload).toHaveBeenCalled());

    });
  });

});
