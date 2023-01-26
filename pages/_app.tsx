import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from '../src/modules/layout/app-layout/app-layout';

function PersonalityTest({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default PersonalityTest;
