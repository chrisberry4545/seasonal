export const setStoredData = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStoredData = <T>(key: string): T | null => {
  const storedData = localStorage.getItem(key);
  return storedData && JSON.parse(storedData);
};
