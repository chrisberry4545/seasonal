import React, { FC, Fragment } from 'react';

import { SelectLocationModalConnector } from '../SelectLocationModal/SelectLocationModal.connector';
import { RegionChangedPromptConnector } from '../RegionChangedPrompt/RegionChangedPrompt.connector';
import { FeedbackModalConnector } from '../FeedbackModal/FeedbackModal.connector';
import { ErrorDisplayConnector } from '../ErrorDisplay/ErrorDisplay.connector';

export const GlobalModals: FC<{}> = () => (
  <Fragment>
    <SelectLocationModalConnector />
    <RegionChangedPromptConnector />
    <FeedbackModalConnector />
    <ErrorDisplayConnector />
  </Fragment>
);
