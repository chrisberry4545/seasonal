import {
  initAppEpic$
} from './init-app.epic';
import { of } from 'rxjs';
import { initApp } from '@chrisb-dev/seasonal-shared-frontend-redux';

describe('initAppEpic$', () => {
  test('returns initApp', async  () => {
    const result = await initAppEpic$(
      of(null) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(initApp());
  });
});
