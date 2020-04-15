import { goToLinkUrl } from './linking';
import { Linking } from 'react-native';

describe('goToLinkUrl', () => {
  let mockOpenUrl: jest.SpyInstance;
  const url = 'http://test.com';

  beforeEach(() => {
    mockOpenUrl = jest.spyOn(
      Linking, 'openURL'
    );
    mockOpenUrl.mockClear();
  });

  test('opens the link if there is a url', () => {
    goToLinkUrl(url);
    expect(mockOpenUrl).toHaveBeenCalledWith(url);
  });

  test('does nothing if there is no url', () => {
    goToLinkUrl();
    expect(mockOpenUrl).not.toHaveBeenCalled();
  });

});
