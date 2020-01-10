import React, { FC } from 'react';

import { Linking, TextStyle } from 'react-native';

import {
  PRIVACY_POLICY_URL
} from '../../config';
import { TextHeadingMedium, BareButton } from '../../components-elements';

const stylePrivacyPolicyLink: TextStyle = {
  height: 40,
  textAlign: 'center'
};

const stylePrivacyPolicyLinkText: TextStyle = {
  flex: 1,
  textAlign: 'center'
};

const linkToPrivacyPolicy = (): void => {
  Linking.canOpenURL(PRIVACY_POLICY_URL).then((supported) => {
    if (supported) {
      Linking.openURL(PRIVACY_POLICY_URL);
    }
  });
};

export const PrivacyPolicyLink: FC<{}> = () => (
  <BareButton
    style={ stylePrivacyPolicyLink }
    onClick={linkToPrivacyPolicy}>
    <TextHeadingMedium style={ stylePrivacyPolicyLinkText }>
      Privacy Policy
    </TextHeadingMedium>
  </BareButton>
);
