import React, { FC, Fragment } from 'react';

import { RegionChangedPromptConnector } from '../RegionChangedPrompt/RegionChangedPrompt.connector';
import { ErrorDisplayConnector } from '../ErrorDisplay/ErrorDisplay.connector';

export const GlobalModals: FC<{}> = () => (
  <Fragment>
    <RegionChangedPromptConnector />
    <ErrorDisplayConnector />
  </Fragment>
);
