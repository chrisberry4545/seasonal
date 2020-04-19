import {
  getCurrentDeviceLocation$
} from './get-current-device-location';

describe('getCurrentDeviceLocation$', () => {
  const location = {
    coords: {}
  } as Position;

  test('gets the location from the window', async () => {
    jest.spyOn(window, 'navigator', 'get')
      .mockReturnValue({
        geolocation: {
          getCurrentPosition: jest.fn().mockImplementation(
            ((success: (loc: Position) => void) => {
              success(location);
            })
          )
        }
      } as any);
    const result = await getCurrentDeviceLocation$().toPromise();
    expect(result).toBe(location);
  });

});
