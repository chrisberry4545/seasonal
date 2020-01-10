import { AsyncStorage } from 'react-native';

export const setStoredData = async <T>(key: string, data: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return;
  }
};

export const getStoredData = async <T>(key: string): Promise<T | null> => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result && JSON.parse(result);
   } catch (error) {
     return null;
   }
};
