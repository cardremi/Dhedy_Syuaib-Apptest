import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store';
import Router from './src/config/router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
