import { Observable } from 'rxjs';
import { getCurrentPositionAsync, LocationData } from 'expo-location';
import { askAsync, LOCATION } from 'expo-permissions';

export const getCurrentDeviceLocation$ = (): Observable<LocationData> => (
  new Observable((observer) => {
    askAsync(LOCATION).then(({ status }) => {
      if (status !== 'granted') {
        observer.error('Permission denied');
        observer.complete();
      } else {
        getCurrentPositionAsync({}).then((location) => {
          observer.next(location);
          observer.complete();
        });
      }
    });
  })
);
