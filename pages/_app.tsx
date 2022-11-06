import { I18nProvider } from '@lingui/react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

import { activate } from '../i18n';

import { i18n } from '@lingui/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AppPropsWithLayout extends AppProps<{ session: Session }> {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const { locale } = useRouter();
  useEffect(() => {
    // Activate the default locale on page load
    activate(locale + '');
  }, [locale]);

  return (
    <SessionProvider session={session}>
      {getLayout(
        <I18nProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nProvider>
      )}
    </SessionProvider>
  );
  // <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;
