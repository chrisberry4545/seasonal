import { Platform } from 'react-native';

export const PRIVACY_POLICY_URL: string =
  'https://chrisberry4545.github.io/eat-seasonal-privacy-policy/';
export const STORE_URL: string = Platform.OS === 'ios'
  ? 'https://apps.apple.com/us/app/eat-seasonal/id1496551124?ls=1'
  : 'market://details?id=com.chrisbdev.seasonal';
