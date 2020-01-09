import React, { FC } from 'react';
import { BareButton } from '../Buttons';
import { TextMedium } from '../Text';
import { TextStyle } from 'react-native';
import { styles } from '../../styles';

const styleRadioButton: TextStyle = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  minHeight: 30
};
const styleRadioButtonSelected: TextStyle = {
  backgroundColor: styles.colors.selectionColor
};

export const RadioButton: FC<{
  isSelected?: boolean,
  label: string,
  onClick: () => void
}> = ({
  isSelected,
  label,
  onClick
}) => (
  <BareButton
    style={[
      styleRadioButton,
      ...(isSelected ? [styleRadioButtonSelected] : [])
    ]}
    onClick={onClick}
    >
    <TextMedium>{label}</TextMedium>
  </BareButton>
);
