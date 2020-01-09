import * as Font from 'expo-font';
import {
  styles
} from './../styles';

export const loadFonts = (): Promise<void> => Font.loadAsync({
  [styles.fonts.primary]: require('./../../assets/fonts/Roboto-Regular.ttf')
});
