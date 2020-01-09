import * as Amplitude from 'expo-analytics-amplitude';

export const initAnalytics = () =>
  Amplitude.initialize('abacf5c432944e007c91bab33fcfe44e');

export const trackEvent = (
  eventName: string,
  properties: {
    [name: string]: any;
  } = {}
) => Amplitude.logEventWithProperties(eventName, properties);
