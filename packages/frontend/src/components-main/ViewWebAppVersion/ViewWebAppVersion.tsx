import React, { FC } from 'react';

import {
  PrimaryButton
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  IViewWebAppVersionDispatchProps
} from './ViewWebAppVersion.interface';

export const ViewWebAppVersion: FC<IViewWebAppVersionDispatchProps> = ({
  onGoToWebVersion
}) => (
  <PrimaryButton e2eTag='view-web-version' onClick={onGoToWebVersion}>
    To web version
  </PrimaryButton>
);
