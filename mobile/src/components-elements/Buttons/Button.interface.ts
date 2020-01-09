import { StyleProp, TextStyle } from 'react-native';

export interface IButton {
  activeOpacity?: number;
  onClick?: () => void;
  style?: StyleProp<TextStyle>;
}
