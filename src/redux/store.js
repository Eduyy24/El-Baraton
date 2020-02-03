import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import productsReducer from './reducers/ProductsReducer';
import thunk from 'redux-thunk';

// Se deben agregar todos los reducer existentes, el numero puede variar segun las necesidades del negocio.
const reducer = combineReducers({
  productsReducer,
});

// configuraciones generales
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {store, persistor};
