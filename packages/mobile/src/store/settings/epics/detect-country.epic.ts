import { GET_COUNTRIES_SUCCESS, selectAllRegions, selectSettingsRegionId, userRegionDetected } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { getNearestRegionFromLatLng } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { getCurrentDeviceLocation$ } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';

export const detectCountry$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(GET_COUNTRIES_SUCCESS),
    withLatestFrom(state$),
    map(([, state]) => ({
      allRegions: selectAllRegions(state),
      regionId: selectSettingsRegionId(state)
    })),
    filter(({ allRegions, regionId }) =>
      Boolean(!regionId && allRegions)
    ),
    debounceTime(100),
    switchMap(({ allRegions }) => (
      getCurrentDeviceLocation$().pipe(
        map((location) => ({
          allRegions,
          error: null,
          location: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          }
        })),
        catchError((error) => {
          const firstRegion = allRegions![0];
          return of({
            allRegions,
            error,
            location: {
              lat: firstRegion.latLng.lat,
              lng: firstRegion.latLng.lng
            }
          });
        })
      )
    )),
    map(({ allRegions, error, location }) => ({
      error,
      nearestRegion: getNearestRegionFromLatLng(allRegions, location)
    })),
    map(({ nearestRegion, error }) => userRegionDetected(
      nearestRegion!.id, error
    ))
  )
);
