import {
  selectCurrentRegion,
  selectCountryAndRegionsSelectGroup
} from './current-country.selectors';
import { IState } from '../state.interface';

describe('selectCurrentRegion', () => {
  const state = {
    countryData: {
      data: [{
        regions: [{}]
      }]
    },
    settings: {
      selectedRegionId: 'regionId'
    }
  } as IState;

  test('returns undefined if the region cannot be found', () => {
    const result = selectCurrentRegion(state);
    expect(result).toBeUndefined();
  });

  test('returns the matching region', () => {
    const stateToUse = {
      ...state,
      countryData: {
        ...state.countryData,
        data: [{
          regions: [{
            id: 'regionId'
          }]
        }]
      }
    } as IState;
    const result = selectCurrentRegion(stateToUse);
    expect(result).toBe(
      stateToUse.countryData.data![0].regions[0]
    );
  });

});

describe('selectCountryAndRegionsSelectGroup', () => {

  test('returns undefined if there are no countries', () => {
    const result = selectCountryAndRegionsSelectGroup({
      countryData: {},
      settings: {}
    } as IState);
    expect(result).toBeUndefined();
  });

  test('returns the regions grouped by countries', () => {
    const result = selectCountryAndRegionsSelectGroup({
      countryData: {
        data: [{
          name: 'c1',
          regions: [{
            id: 'id1',
            name: 'n1'
          }, {
            id: 'id2',
            name: 'n2'
          }]
        }]
      },
      settings: {
        selectedRegionId: 'id2'
      }
    } as IState);
    expect(result).toEqual([{
      groupName: 'c1',
      selectOptions: [{
        isSelected: false,
        name: 'n1',
        value: 'id1'
      }, {
        isSelected: true,
        name: 'n2',
        value: 'id2'
      }]
    }]);
  });

});
