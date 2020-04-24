import {
  initApp$
} from './init-app.epic';
import { of } from 'rxjs';
import { LOCATION_CHANGE } from 'connected-react-router';
import { initApp } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { FOOD_TABLE_URL, LANDING_URL } from '../../../const';

describe('initApp$', () => {
  test('returns initApp when on a page that is not the landing page', async  () => {
    const result = await initApp$(
      of({
        payload: {
          location: {
            pathname: FOOD_TABLE_URL
          }
        },
        type: LOCATION_CHANGE
      }) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(initApp());
  });

  test('does not do anything on the landing page', async  () => {
    try {
      await initApp$(
        of({
          payload: {
            location: {
              pathname: LANDING_URL
            }
          },
          type: LOCATION_CHANGE
        }) as any,
        of(null) as any,
        {}
      ).toPromise();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
