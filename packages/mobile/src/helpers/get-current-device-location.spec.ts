import {
  getCurrentDeviceLocation$
} from './get-current-device-location';
import { LocationData } from 'expo-location';
import * as expoLocation from 'expo-location';
import { PermissionStatus, PermissionResponse } from 'expo-permissions';
import * as expoPermissions from 'expo-permissions';

describe('getCurrentDeviceLocation$', () => {

  describe('when location permission is granted', () => {
    const location = {
      coords: {}
    } as LocationData;

    beforeEach(() => {
      jest.spyOn(expoPermissions, 'askAsync')
        .mockResolvedValue({
          status: PermissionStatus.GRANTED
        } as PermissionResponse);
      jest.spyOn(expoLocation, 'getCurrentPositionAsync')
        .mockResolvedValue(location);
    });

    test('returns a permission denied error', async () => {
      const result = await getCurrentDeviceLocation$().toPromise();
      expect(result).toBe(location);
    });

  });

  describe('when location permission is denied', () => {

    beforeEach(() => {
      jest.spyOn(expoPermissions, 'askAsync')
        .mockResolvedValue({
          status: PermissionStatus.DENIED
        } as PermissionResponse);
    });

    test('returns a permission denied error', async () => {
      let error: string;
      try {
        await getCurrentDeviceLocation$().toPromise();
      } catch (e) {
        error = e;
      }
      expect(error!).toBe('Permission denied');
    });
  });

});
