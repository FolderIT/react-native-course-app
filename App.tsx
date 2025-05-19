import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import RootStack from './src/navigation/RootStack';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <RootStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
