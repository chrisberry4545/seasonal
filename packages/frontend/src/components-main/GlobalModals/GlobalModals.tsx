import React, { FC, Fragment } from 'react';

import { RegionChangedPromptConnector } from '../RegionChangedPrompt/RegionChangedPrompt.connector';

export const GlobalModals: FC<{}> = () => (
  <Fragment>
    <RegionChangedPromptConnector />
  </Fragment>
);
