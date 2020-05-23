import { corsOptions } from './cors-options';

describe('corsOptions', () => {

  describe.each([
    'http://seasonal-frontend:5201',
    'http://127.0.0.1:5201',
    'https://chrisberry4545.github.io',
    'http://eat-seasonal.co.uk',
    'https://eat-seasonal.co.uk',
    'http://localhost:5201',
    'http://localhost:5202'
  ])('when the origin is allowed', (origin) => {
    test('calls back with true', () => {
      const callback = jest.fn();
      (corsOptions.origin as any)(origin, callback);
      expect(callback).toHaveBeenCalledWith(null, true);
    });
  });

  describe('when the origin is not allowed', () => {
    test('throws an error', () => {
      const callback = jest.fn();
      (corsOptions.origin as any)('https://google.com', callback);
      expect(callback).toHaveBeenCalledWith(new Error('Not allowed by CORS'));
    });
  });

});
