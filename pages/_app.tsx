import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import 'bootstrap/dist/css/bootstrap.min.css';
// redux store
import store from '../src/redux/store';

// @emotion
import createEmotionCache from '../src/utility/createEmotionCache';

// @emotion/react components
import { CacheProvider, EmotionCache } from '@emotion/react';
import SSRProvider from 'react-bootstrap/SSRProvider';

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// themes
import '../src/styles/globals.css';
import useAuth from '../src/hooks/auth';
import MainLayout from '../src/components/MainLayout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any;
  emotionCache?: EmotionCache;
};

const persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <SSRProvider>
            <ThemeProvider
              breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
              minBreakpoint="xxs"
            >
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </ThemeProvider>
          </SSRProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
}
