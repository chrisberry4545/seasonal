import React, { FC } from 'react';
import { IModalLayout } from './ModalLayout.interface';
import { View, Modal, ViewStyle } from 'react-native';
import { BareButton, CrossIcon } from '../../components-elements';
import { colors } from '../../styles/colors';
import { shadows } from '../../styles/shadows';

const styleModalWrapper: ViewStyle = {
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.2)',
  height: '100%',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%'
};

const styleModalView: ViewStyle = {
  ...shadows.level1,
  backgroundColor: colors.backgroundColor,
  margin: 10,
  maxWidth: 350,
  paddingBottom: 30,
  paddingHorizontal: 50,
  paddingTop: 60
};

const styleModalLayoutCloseButton: ViewStyle = {
  position: 'absolute',
  right: 24,
  top: 12
};

export const ModalLayout: FC<IModalLayout> = ({
  children,
  isVisible,
  onClose
}) => (
  <Modal
    presentationStyle='overFullScreen'
    animationType='fade'
    transparent={true}
    visible={isVisible}>
    <View style={styleModalWrapper}>
      <View style={styleModalView}>
        {
          onClose &&
          <BareButton style={styleModalLayoutCloseButton} onClick={onClose}>
            <CrossIcon size={32} />
          </BareButton>
        }
        { children }
      </View>
    </View>
  </Modal>
);
