import { Observable } from 'rxjs';

export const getCurrentDeviceLocation$ = (): Observable<Position> => (
  new Observable((observer) => {
    window.navigator.geolocation.getCurrentPosition(
      (location) => {
        observer.next(location);
        observer.complete();
      },
      () => {
        observer.error('Permission denied');
        observer.complete();
      }
    );
  })
);
