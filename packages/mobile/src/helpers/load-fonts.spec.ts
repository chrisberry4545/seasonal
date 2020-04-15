import {
  loadFonts
} from './load-fonts';
import * as Font from 'expo-font';
import { styles } from '../styles';

describe('loadFonts', () => {
  test('loads the expected fonts', async () => {
    const spy = jest.spyOn(Font, 'loadAsync')
      .mockResolvedValue();
    await loadFonts();
    expect(spy).toHaveBeenCalledWith({
      [styles.fonts.primary]: require('./../../assets/fonts/Roboto-Regular.ttf')
    });
  });
});
