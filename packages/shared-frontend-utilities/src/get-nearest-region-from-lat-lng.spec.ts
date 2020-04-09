import {
  getNearestRegionFromLatLng
} from './get-nearest-region-from-lat-lng';
import { IRegion, ILatLng } from '@chrisb-dev/seasonal-shared-models';

describe('getNearestRegionFromLatLng', () => {
  const dataRegions = [
    {
      latLng: {
        lat: 50,
        lng: 50
      },
      name: 'r1'
    },
    {
      latLng: {
        lat: 25,
        lng: 25
      },
      name: 'r2'
    }
  ] as IRegion[];
  const testCases = [
    {
      expectedResult: dataRegions[0],
      latLng: {
        lat: 50,
        lng: 50
      },
      regions: dataRegions
    },
    {
      expectedResult: dataRegions[1],
      latLng: {
        lat: 30,
        lng: 35
      },
      regions: dataRegions
    },
    {
      expectedResult: dataRegions[1],
      latLng: {
        lat: 10,
        lng: 50
      },
      regions: dataRegions
    },
    {
      expectedResult: dataRegions[0],
      latLng: {
        lat: 10,
        lng: 100
      },
      regions: dataRegions
    }
  ] as Array<{
    regions: IRegion[];
    latLng: ILatLng;
    expectedResult: IRegion;
  }>;

  test.each(testCases)('test gets nearest region',
    ({ regions, latLng, expectedResult }) => {
      expect(getNearestRegionFromLatLng(
        regions, latLng
      )).toBe(expectedResult);
    }
  );
});
