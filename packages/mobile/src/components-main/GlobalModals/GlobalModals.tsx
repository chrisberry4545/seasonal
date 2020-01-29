import React, { FC, Fragment } from 'react';

import { SelectLocationModalConnector } from '../SelectLocationModal/SelectLocationModal.connector';
import { RegionChangedPromptConnector } from '../RegionChangedPrompt/RegionChangedPrompt.connector';
import { FeedbackModalConnector } from '../FeedbackModal/FeedbackModal.connector';

export const GlobalModals: FC<{}> = () => (
  <Fragment>
    <SelectLocationModalConnector />
    <RegionChangedPromptConnector />
    <FeedbackModalConnector />
  </Fragment>
);
