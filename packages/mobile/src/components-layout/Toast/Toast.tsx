import React, { FC } from 'react';
import { ViewStyle, View } from 'react-native';
import { BareButton, CrossIcon } from '../../components-elements';
import { colors } from '../../styles/colors';

const styleToast: ViewStyle = {
  alignItems: 'center',
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

type ToastTypes = 'error' | 'info';
const getTypeColor = (type: ToastTypes): ViewStyle => {
  switch (type) {
    case 'info':
      return {
        backgroundColor: colors.selectionColorAlt2
      };
    case 'error':
      return {
        backgroundColor: colors.errorColor
      };
  }
};

export const Toast: FC<{
  onClose?: () => void,
  isVisible: boolean,
  type: ToastTypes
}> = ({
  children,
  onClose,
  isVisible = false,
  type = 'info'
}) => (
  isVisible
    ? <View style={[styleToast, getTypeColor(type)]}>
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
