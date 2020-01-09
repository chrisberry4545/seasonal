import React, { FC, Fragment } from 'react';

import { SelectLocationModalConnector } from '../SelectLocationModal/SelectLocationModal.connector';
import { RegionChangedPromptConnector } from '../RegionChangedPrompt/RegionChangedPrompt.connector';

export const GlobalModals: FC<{}> = () => (
  <Fragment>
    <SelectLocationModalConnector />
    <RegionChangedPromptConnector />
  </Fragment>
);
