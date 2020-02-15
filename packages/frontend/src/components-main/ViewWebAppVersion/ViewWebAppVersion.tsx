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
  <PrimaryButton onClick={onGoToWebVersion}>
    To web version
  </PrimaryButton>
);
