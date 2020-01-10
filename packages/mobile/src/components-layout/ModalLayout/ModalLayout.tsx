import React, { FC } from 'react';
import { IModalLayout } from './ModalLayout.interface';
import { View, Modal, ViewStyle } from 'react-native';
import { BareButton, CrossIcon } from '../../components-elements';

const styleModalView: ViewStyle = {
  padding: 20
};

const styleModalLayoutCloseButtonView: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 20
};

export const ModalLayout: FC<IModalLayout> = ({
  children,
  isVisible,
  onClose
}) => (
  <Modal
    presentationStyle='pageSheet'
    animationType='fade'
    transparent={false}
    visible={isVisible}>
    <View style={styleModalView}>
      {
        onClose &&
        <View style={styleModalLayoutCloseButtonView}>
          <BareButton onClick={onClose}>
            <CrossIcon size={32} />
          </BareButton>
        </View>
      }
      { children }
    </View>
  </Modal>
);
