import React, { FC } from 'react';

import { RadioButton } from './RadioButton';
import { View, ViewStyle } from 'react-native';

const styleRadioButtonGroup: ViewStyle = {
  display: 'flex',
  flexDirection: 'row'
};

export const RadioButtonGroup: FC<{
  radioButtons: Array<{
    value: string,
    label: string
  }>,
  selectedValue?: string,
  onChange: (newValue: string) => void,
  style?: ViewStyle;
}> = ({
  selectedValue,
  radioButtons,
  onChange,
  style
}) => (
  <View style={[styleRadioButtonGroup, style]}>
  {
    radioButtons.map(({ value, label }) => (
      <RadioButton
        key={value}
        isSelected={selectedValue === value}
        label={label}
        onClick={() => onChange(value)}
      />
    ))
  }
  </View>
);
