import React, { FC } from 'react';

import { IErrorDisplayProps } from './ErrorDisplay.interface';
import { TextLarge } from '../../components-elements';
import { TextStyle } from 'react-native';
import { colors } from '../../styles/colors';
import { Toast } from '../../components-layout';

const styleErrorDisplayText: TextStyle = {
  color: colors.textLight
};

export const ErrorDisplay: FC<IErrorDisplayProps> = ({
  isVisible,
  hideErrorDisplay
}) => (
  <Toast type='error'
    onClose={hideErrorDisplay}
    isVisible={isVisible}>
    <TextLarge style={styleErrorDisplayText}>
      It looks like something has gone wrong!
    </TextLarge>
    <TextLarge style={styleErrorDisplayText}>
      Please try again later.
    </TextLarge>
  </Toast>
);
