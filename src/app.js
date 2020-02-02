import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import navigator from './app-navigator';

const persistenceKey = 'persistenceKeyBaraton';

const persistNavigationState = async navState => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    // handle the error according to your needs
  }
};

const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString || '');
};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    let Navigation = createAppContainer(navigator);
    // eslint-disable-next-line no-console
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation
            persistNavigationState={persistNavigationState}
            loadNavigationState={loadNavigationState}
          />
        </PersistGate>
      </Provider>
    );
  }
}
