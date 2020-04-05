import { ICancelablePromise } from '../../interfaces';

export const makePromiseCancelable = <T>(
  promise: Promise<T>
): ICancelablePromise<T> => {
  let hasCancelled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      (val) => hasCancelled ? reject({ isCanceled: true }) : resolve(val),
      (error) => hasCancelled ? reject({ isCanceled: true }) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCancelled = true;
    }
  };
};
