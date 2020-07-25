import React from 'react';
import {
  FullListTranslationsSeasonNames,
  ITranslationsSeasonNameViewItem
} from './FullListTranslationsSeasonNames';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';
import * as sharedFrontendUtils from '@chrisb-dev/seasonal-shared-frontend-utilities';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    EDIT: 'edit',
    TRANSLATIONS_SEASON_NAME: 'translations'
  }
}));
jest.mock('../../services', () => ({
  deleteTranslationsSeasonName: jest.fn(),
  getAllTranslationsSeasonNames: jest.fn()
}));
jest.mock('@chrisb-dev/seasonal-shared-frontend-utilities', () => ({
  getAllSeasons: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListTranslationsSeasonNames', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListTranslationsSeasonNames />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('the inner component', () => {
    let innerWrapper: ShallowWrapper;
    let mockReload: jest.Mock;
    let mockDelete: jest.SpyInstance;
    const item = {
      id: 'id',
      languages: ['en-GB'],
      name: 'name',
      seasonId: 'id-2',
      seasonName: 'name-2'
    } as ITranslationsSeasonNameViewItem;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteTranslationsSeasonName')
        .mockResolvedValue(item);
      jest.spyOn(services, 'getAllTranslationsSeasonNames')
        .mockResolvedValue([item]);
      jest.spyOn(sharedFrontendUtils, 'getAllSeasons')
        .mockResolvedValue([{
          id: 'c1', name: 'name-3'
        }] as IBaseSeason[]);
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
      expect(getFullListProps().getItemName(item)).toBe('name-2 - en-GB - name'));

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
