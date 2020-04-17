import {
  initAnalytics,
  setTrackingUser,
  trackEvent
} from './analytics';

import * as Amplitude from 'expo-analytics-amplitude';

describe('initAnalytics', () => {
  test('initializes amplitude', () => {
    const spy = jest.spyOn(Amplitude, 'initialize');
    initAnalytics();
    expect(spy).toHaveBeenCalled();
  });
});

describe('setTrackingUser', () => {
  test('sets tracking user', () => {
    const spy = jest.spyOn(Amplitude, 'setUserId');
    setTrackingUser('userId');
    expect(spy).toHaveBeenCalledWith('userId');
  });
});

describe('trackEvent', () => {
  test('logs the event', () => {
    const spy = jest.spyOn(Amplitude, 'logEventWithProperties');
    trackEvent('event', {
      property: 'a'
    });
    expect(spy).toHaveBeenCalledWith(
      'event',
      {
        property: 'a'
      }
    );
  });
});
