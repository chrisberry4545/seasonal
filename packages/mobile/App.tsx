import 'react-native-gesture-handler';
import React, { FC, useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import {
  loadFonts,
  initAnalytics
} from './src/helpers';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { AppContainer } from './src/components-app';
import { GlobalModals } from './src/components-main/GlobalModals/GlobalModals';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAnalytics();
    Promise.all([
      loadFonts()
    ]).then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AppContainer />
      <GlobalModals />
    </Provider>
  );
};

export default App;
