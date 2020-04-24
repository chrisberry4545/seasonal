import {
  initApp$
} from './init-app.epic';
import { of } from 'rxjs';
import { initApp } from '@chrisb-dev/seasonal-shared-frontend-redux';

describe('initApp$', () => {
  test('returns initApp', async  () => {
    const result = await initApp$(
      of(null) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(initApp());
  });
});
