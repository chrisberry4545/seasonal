export interface ICancelablePromise<T> {
  promise: Promise<T>;
  cancel: () => void;
}
