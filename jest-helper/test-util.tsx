import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from '@testing-library/react';
import { getStore } from '../src/store/store/store';

export const getComponentWithReduxWrapper = (cmp: React.ReactNode) => {
  const store = getStore();
  return renderer.create(
    <Provider store={store}>
      {cmp}
    </Provider>,
  );
};

export const getComponentWithReduxWrapperForReactTestingLib = (cmp: React.ReactNode) => {
  const store = getStore();
  return render(
    <Provider store={store}>
      {cmp}
    </Provider>,
  );
};
