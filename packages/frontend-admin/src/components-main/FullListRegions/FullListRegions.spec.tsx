import React from 'react';
import { FullListRegions, IRegionViewItem } from './FullListRegions';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion, ICountry } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    EDIT: 'edit',
    REGION: 'region'
  }
}));
jest.mock('../../services', () => ({
  deleteRegion: jest.fn(),
  getAllCountries: jest.fn(),
  getAllRegions: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListRegions', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListRegions />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('the inner component', () => {
    let innerWrapper: ShallowWrapper;
    let mockReload: jest.Mock;
    let mockDelete: jest.SpyInstance;
    const item = {
      countryId: 'c1', countryName: 'country', id: 'id', name: 'name'
    } as IRegionViewItem;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      jest.spyOn(services, 'getAllRegions')
        .mockResolvedValue([
          item
        ] as IDbRegion[]);
      jest.spyOn(services, 'getAllCountries')
        .mockResolvedValue([{
          id: 'c1', name: 'country1'
        }] as ICountry[]);
      mockDelete = jest.spyOn(services, 'deleteRegion')
        .mockResolvedValue({} as IDbRegion);
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
      expect(getFullListProps().getItemName(item)).toBe('country - name'));

    test('getItemEditUrl returns the expected url', () =>
      expect(getFullListProps().getItemEditUrl(item)).toBe(
        'region/edit/id'
      ));

    describe('when delete is pressed', () => {
      beforeEach(async () => await getFullListProps().deleteItemFunc(item));

      test('calls delete', () =>
        expect(mockDelete).toHaveBeenCalledWith(item.id));

      test('calls reload', () => expect(mockReload).toHaveBeenCalled());

    });
  });

});
