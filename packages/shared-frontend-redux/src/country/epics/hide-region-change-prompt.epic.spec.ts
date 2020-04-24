import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { hideRegionChangePrompt } from '../../ui';
import { setUserRegionDetected } from '../country.actions';
import { hideRegionChangePrompt$ } from './hide-region-change-prompt.epic';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('hideRegionChangePrompt$', () => {

  test('returns hideRegionChangePrompt after a delay', () => {

    testScheduler.run(({ cold, expectObservable }) => {
      const input = cold('a', {
        a: setUserRegionDetected('regionId')
      });
      const expected = '5000ms r';

      expectObservable(
        hideRegionChangePrompt$(
          input as any,
          of(null) as any,
          {}
        )
      ).toBe(expected, {
        r: hideRegionChangePrompt()
      });
    });
  });

});
