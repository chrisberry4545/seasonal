import { ViewStyle } from 'react-native';
import { colors } from './colors';

export const shadows: { [key: string]: ViewStyle } = {
  level1: {
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41
  }
};
