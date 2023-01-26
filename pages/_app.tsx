import '../styles/globals.css'
import AppLayout from '../src/layout/app-layout/app-layout';
import type { AppProps } from 'next/app'

function PersonalityTest({ Component, pageProps }: AppProps) {
  return <AppLayout>
      <Component {...pageProps} />
  </AppLayout>
}

export default PersonalityTest
