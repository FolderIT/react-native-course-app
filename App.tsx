import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import RootStack from './src/navigation/RootStack';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {

useEffect(() => {
  RNBootSplash.hide({ fade: true });
}, []);

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <RootStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);};

export default App;
