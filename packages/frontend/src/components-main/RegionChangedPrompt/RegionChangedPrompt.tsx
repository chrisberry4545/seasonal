import React, { FC } from 'react';

import { IRegionChangedPromptProps } from './RegionChangedPrompt.interface';
import { TextMedium, BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import { Toast } from '../../components-layout';
import './RegionChangedPrompt.scss';

export const RegionChangedPrompt: FC<IRegionChangedPromptProps> = ({
  isVisible,
  currentRegion,
  hideRegionChangedPrompt,
  showRegionSelector
}) => (
  <Toast
    data-e2e='region-changed-prompt'
    onClose={hideRegionChangedPrompt} isVisible={Boolean(currentRegion && isVisible)}>
    <BareButton onClick={showRegionSelector} className='c-region-changed-prompt__btn'>
      <TextMedium className='c-region-changed-prompt__text'>
        We've detected your closest region as: { currentRegion && currentRegion.name }.
      </TextMedium>
      <TextMedium className='c-region-changed-prompt__text'>
        If this is wrong, click here.
      </TextMedium>
    </BareButton>
  </Toast>
);
