import { Platform } from 'react-native';

export const PRIVACY_POLICY_URL: string =
  'https://chrisberry4545.github.io/eat-seasonal-privacy-policy/';
export const STORE_URL: string = Platform.OS === 'ios'
  ? 'https://play.google.com/store/apps/details?id=com.chrisbdev.seasonal'
  : 'market://details?id=com.chrisbdev.seasonal';
