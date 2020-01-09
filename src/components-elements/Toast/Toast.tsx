import React, { FC } from 'react';
import { ViewStyle, View } from 'react-native';
import { BareButton } from '../Buttons';
import { CrossIcon } from '../Icons';
import { colors } from '../../styles/colors';

const styleToast: ViewStyle = {
  alignItems: 'center',
  backgroundColor: colors.selectionColorAlt2,
  bottom: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 12,
  position: 'absolute',
  width: '100%'
};
const styleToastInner: ViewStyle = {
  width: '90%'
};

export const Toast: FC<{
  onClose?: () => void,
  isVisible: boolean
}> = ({
  children,
  onClose,
  isVisible
} = {
  isVisible: false
}) => (
  isVisible
    ? <View style={styleToast}>
        <View style={styleToastInner}>
          { children }
        </View>
        {
          onClose &&
            <BareButton onClick={onClose}>
              <CrossIcon color={colors.textLight} size={32}  />
            </BareButton>
        }
      </View>
    : null
);
