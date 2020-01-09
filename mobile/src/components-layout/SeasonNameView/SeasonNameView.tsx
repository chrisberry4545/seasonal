import React, { FC } from 'react';

import {
  ISeasonNameViewInputProps
} from './SeasonNameView.interface';
import { TextStyle } from 'react-native';
import { TextHeadingMedium } from '../../components-elements';

const styleSeasonNameView: TextStyle = {
  marginBottom: 6,
  marginTop: 8,
  textAlign: 'center'
};

export const SeasonNameView: FC<ISeasonNameViewInputProps> = ({
  name
}) => (
  <TextHeadingMedium style={styleSeasonNameView}>
    {name}
  </TextHeadingMedium>
);
