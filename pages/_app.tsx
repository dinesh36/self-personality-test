import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import AppLayout from '../src/modules/layout/app-layout/app-layout';
import { getStore } from '../src/store/store/store';

function PersonalityTest({ Component, pageProps }: AppProps) {
  const store = getStore();
  return (
    <Provider store={store}>
      <AppLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default PersonalityTest;
