import { Dimensions } from 'react-native';

export const getScreenWidth = () =>
  Math.round(Dimensions.get('window').width);
