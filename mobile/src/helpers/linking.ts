import { Linking } from 'react-native';

export const goToLinkUrl = (linkUrl?: string): void => {
  if (linkUrl) {
    Linking.openURL(linkUrl);
  }
};
