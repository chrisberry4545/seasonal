import { GeolocationReturnType } from 'react-native';
import { Observable } from 'rxjs';

export const getCurrentDeviceLocation$ = (): Observable<GeolocationReturnType> => (
  new Observable((observer) => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        observer.next(location);
        observer.complete();
      },
      (error) => {
        observer.error(error);
        observer.complete();
      }
    );
  })
);
