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
import { initLocalization } from './src/helpers/init-localization';

initLocalization();

const App: FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    initAnalytics();
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
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
