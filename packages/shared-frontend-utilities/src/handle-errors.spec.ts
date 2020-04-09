import { handleErrors } from './handle-errors';

describe('handleErrors', () => {
  const mockResponse = {
    json: () => Promise.resolve('Result'),
    status: 200
  } as Response;

  test('returns the result if the status is 200', async () =>
    expect(await handleErrors(mockResponse)).toBe('Result'));

  test('throws an error is the status is not 200', async () => {
    let error: Error | null = null;
    try {
      await handleErrors({
        ...mockResponse,
        status: 500
      });
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
  });
});
