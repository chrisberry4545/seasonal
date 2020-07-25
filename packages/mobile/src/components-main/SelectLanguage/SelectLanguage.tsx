import React, { FC, Fragment } from 'react';

import { ISelectLanguageProps } from './SelectLanguage.interface';
import { TextHeadingMedium, SelectBox } from '../../components-elements';
import { ViewStyle, View } from 'react-native';
import { sizes } from '../../styles/sizes';
import i18n from 'i18n-js';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

const styleSelectLanguageHeader: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: sizes.defaultHeadingMarginBottom
};

export const SelectLanguage: FC<ISelectLanguageProps> = ({
  languages,
  onLanguageSelected,
  children
}) => (
  <Fragment>
    <View style={styleSelectLanguageHeader}>
      {children}
      <TextHeadingMedium>
        {i18n.t('selectYourLanguage')}
      </TextHeadingMedium>
    </View>
    <SelectBox options={languages}
      onSelected={(value) => onLanguageSelected(value as LANGUAGES)} />
  </Fragment>
);
