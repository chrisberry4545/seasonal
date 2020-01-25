import { TextStyle } from 'react-native';

export interface IButton {
  activeOpacity?: number;
  onClick?: () => void;
  style?: TextStyle;
}
