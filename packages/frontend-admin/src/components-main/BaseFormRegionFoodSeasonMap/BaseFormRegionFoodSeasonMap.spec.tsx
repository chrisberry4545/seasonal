
import React from 'react';
import * as react from 'react';
import { BaseFormRegionFoodSeasonMap, IRegionFoodSeasonMapForm } from './BaseFormRegionFoodSeasonMap';
import { shallow, ShallowWrapper } from 'enzyme';
import { DataForm } from '../DataForm/DataForm';
import { IRegionFoodSeasonMap, IFood, IDbRegion, IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import * as services from '../../services';
import * as sharedFrontendUtilities from '@chrisb-dev/seasonal-shared-frontend-utilities';

jest.mock('../../services', () => ({
  createRegionFoodSeasonMap: jest.fn(),
  deleteRegionFoodSeasonMap: jest.fn(),
  getAllFood: jest.fn(),
  getAllRegionFoodSeasonMap: jest.fn(),
  getAllRegions: jest.fn(),
  getAllSeasons: jest.fn()
}));

jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<BaseFormRegionFoodSeasonMap />', () => {
  let wrapper: ShallowWrapper;
  let mockDelete: jest.SpyInstance;
  let mockCreate: jest.SpyInstance;
  let mockGetAll: jest.SpyInstance;
  const existingRegionFoodSeasonMap = {
    foodId: 'f1', id: 'rfs1', regionId: 'r1', seasonId: 's1'
  } as IRegionFoodSeasonMap;

  beforeEach(() => {
    jest.spyOn(react, 'useEffect').mockImplementationOnce((f) => f());
    jest.spyOn(services, 'getAllFood')
      .mockResolvedValue([{ id: 'f1', name: 'food1' }] as IFood[]);
    mockGetAll = jest.spyOn(services, 'getAllRegionFoodSeasonMap')
      .mockResolvedValue([
        existingRegionFoodSeasonMap
      ] as IRegionFoodSeasonMap[]);
    mockGetAll.mockClear();
    jest.spyOn(services, 'getAllRegions')
      .mockResolvedValue([{ id: 'r1', name: 'region1' }] as IDbRegion[]);
    jest.spyOn(sharedFrontendUtilities, 'getAllSeasons')
      .mockResolvedValue([{ id: 's1', name: 'season1' }] as IBaseSeason[]);

    mockDelete = jest.spyOn(services, 'deleteRegionFoodSeasonMap')
      .mockResolvedValue({} as IRegionFoodSeasonMap);
    mockDelete.mockClear();
    mockCreate = jest.spyOn(services, 'createRegionFoodSeasonMap')
      .mockResolvedValue({} as IRegionFoodSeasonMap);
    mockCreate.mockClear();
    wrapper = shallow(
      <BaseFormRegionFoodSeasonMap />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('when update is pressed', () => {
    const newForm = {
      foodId: 'f1',
      regionId: 'r1',
      seasonIds: ['s1']
    } as IRegionFoodSeasonMapForm;
    beforeEach(async () => {
      const sendData = wrapper.find(DataForm).props().sendData;
      if (sendData) {
        await sendData(newForm);
      }
    });

    test('deletes all existing maps', () =>
      expect(mockDelete).toHaveBeenCalledWith(existingRegionFoodSeasonMap.id));

    test('create the new maps', () =>
      expect(mockCreate).toHaveBeenCalledWith({
        foodId: newForm.foodId,
        regionId: newForm.regionId,
        seasonId: newForm.seasonIds[0]
      }));

    test('refreshes the data', () => expect(mockGetAll).toHaveBeenCalled());

  });

});
