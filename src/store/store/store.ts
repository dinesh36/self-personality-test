import {
  createStore, applyMiddleware, combineReducers, AnyAction, EmptyObject, Store,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import layoutReducer from './layout/layout.reducer';
import { IRootStore } from './store.type';
import testReducer from './test/test.reducer';

let cachedStore: (
  Store<EmptyObject & IRootStore, AnyAction> & { dispatch: unknown; }) | null = null;

export const getStaticReducer = () => ({
  layoutState: layoutReducer,
  testState: testReducer,
});

export const configureStore = () => {
  cachedStore = createStore(
    combineReducers(getStaticReducer()),
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return cachedStore;
};

export const getStore = () => {
  if (cachedStore !== null) {
    return cachedStore;
  }
  return configureStore();
};
