import React from 'react';
import {
  FullListTranslationsBadgeNames,
  ITranslationsBadgeNameViewItem
} from './FullListTranslationsBadgeNames';
import { ShallowWrapper, shallow } from 'enzyme';
import { GetAuthorizedBackendData } from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { FullList } from '../FullList/FullList';
import * as services from '../../services';

jest.mock('../FullList/FullList', () => ({
  FullList: () => 'FullList'
}));
jest.mock('../../config', () => ({
  ROUTES: {
    EDIT: 'edit',
    TRANSLATIONS_BADGE_NAME: 'translations'
  }
}));
jest.mock('../../services', () => ({
  deleteTranslationsBadgeName: jest.fn(),
  getAllBadges: jest.fn(),
  getAllTranslationsBadgeNames: jest.fn()
}));
jest.mock('../GetAuthorizedBackendData/GetAuthorizedBackendData', () => ({
  GetAuthorizedBackendData: () => 'GetAuthorizedBackendData'
}));

describe('FullListTranslationsBadgeNames', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <FullListTranslationsBadgeNames />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('the inner component', () => {
    let innerWrapper: ShallowWrapper;
    let mockReload: jest.Mock;
    let mockDelete: jest.SpyInstance;
    const item = {
      badgeId: 'id-2',
      badgeName: 'name-2',
      id: 'id',
      languages: ['en-GB'],
      name: 'name'
    } as ITranslationsBadgeNameViewItem;
    const getFullListProps = () => innerWrapper.find(FullList).first().props();

    beforeEach(async () => {
      mockReload = jest.fn();
      mockDelete = jest.spyOn(services, 'deleteTranslationsBadgeName')
        .mockResolvedValue(item);
      jest.spyOn(services, 'getAllTranslationsBadgeNames')
        .mockResolvedValue([item]);
      jest.spyOn(services, 'getAllBadges')
        .mockResolvedValue([{
          id: 'c1', name: 'name-3'
        }] as IBadge[]);
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
