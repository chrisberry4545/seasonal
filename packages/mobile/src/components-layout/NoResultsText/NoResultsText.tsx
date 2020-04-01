import React, { FC } from 'react';
import { TextStyle } from 'react-native';
import { TextMedium } from '../../components-elements';

const styleNoResultsText: TextStyle = {
  flex: 1,
  marginBottom: 40,
  marginTop: 20,
  textAlign: 'center'
};

export const NoResultsText: FC<{
  text: string | undefined
}> = ({
  text
}) => text
  ? <TextMedium style={styleNoResultsText}>
      { text }
    </TextMedium>
  : null;
