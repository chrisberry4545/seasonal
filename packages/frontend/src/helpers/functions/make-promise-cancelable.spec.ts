import {
  makePromiseCancelable
} from './make-promise-cancelable';
import { ICancelablePromise } from '../../interfaces';

describe('makePromiseCancelable', () => {
  let resolver: () => void;
  let promise: Promise<string>;
  let result: ICancelablePromise<string>;

  beforeEach(() => {
    promise = new Promise<string>((resolve) => {
      resolver = () => resolve('done');
    });
    result = makePromiseCancelable(promise);
  });

  test('cancels a promise if cancel is called', (done) => {
    result.promise.catch((err) => {
      expect(err).toEqual({ isCanceled: true });
      done();
    });
    result.cancel();
    resolver();
  });

  test('promise works as normal if not canceled', (done) => {
    result.promise.then((err) => {
      expect(err).toEqual('done');
      done();
    });
    resolver();
  });

});
