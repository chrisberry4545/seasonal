import { GET_COUNTRIES_SUCCESS, selectAllRegions, selectSettingsRegionId, userRegionDetected, selectCountries } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { getNearestRegionFromLatLng, getCountryThatCoordsExistWithin } from '@chrisb-dev/seasonal-shared-frontend-utilities';
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
      countries: selectCountries(state),
      regionId: selectSettingsRegionId(state)
    })),
    filter(({ allRegions, regionId }) =>
      Boolean(!regionId && allRegions)
    ),
    debounceTime(100),
    switchMap(({ allRegions, countries }) => (
      getCurrentDeviceLocation$().pipe(
        map((location) => ({
          allRegions,
          countries,
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
            countries,
            error,
            location: {
              lat: firstRegion.latLng.lat,
              lng: firstRegion.latLng.lng
            }
          });
        })
      )
    )),
    map(({ allRegions, countries, error, location }) => {
      const userCountry = countries && getCountryThatCoordsExistWithin(countries, location);
      const regionsInCountry = userCountry
        ? userCountry.regions
        : allRegions;
      return {
        error,
        location,
        regionsInCountry
      };
    }),
    map(({ error, regionsInCountry, location }) => ({
      error,
      nearestRegion: getNearestRegionFromLatLng(regionsInCountry, location)
    })),
    map(({ nearestRegion, error }) => userRegionDetected(
      nearestRegion!.id, error
    ))
  )
);
