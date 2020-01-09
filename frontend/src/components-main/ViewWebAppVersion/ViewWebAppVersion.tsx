import React, { FC } from 'react';

import {
  PrimaryButton
} from '../../components-elements';

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
