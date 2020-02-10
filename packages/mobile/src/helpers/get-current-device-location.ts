import { Observable } from 'rxjs';
import {
  getCurrentPositionAsync,
  LocationData,
  getPermissionsAsync
} from 'expo-location';

export const getCurrentDeviceLocation$ = (): Observable<LocationData> => (
  new Observable((observer) => {
    getPermissionsAsync().then(({ status }) => {
      if (status !== 'granted') {
        observer.error('Permission denied');
        observer.complete();
      } else {
        getCurrentPositionAsync({}).then((location) => {
          observer.next(location);
          observer.complete();
        }).catch((err) => {
          observer.error(err);
          observer.complete();
        });
      }
    });
  })
);
