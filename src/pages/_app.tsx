import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Providers from '@/contexts/Providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        defaultTitle='Darts Homes'
        canonical='https://darts.homes'
        description='自宅でダーツ練習をするときのゲームがあります'
        twitter={{ cardType: 'summary' }}
        openGraph={{
          type: 'website',
          title: 'Darts Homes',
          description: '自宅でダーツ練習をするときのゲームがあります',
          site_name: 'Darts Homes',
          url: 'https://darts.homes',
          images: [
            {
              url: 'https://darts.homes/ogp.png',
              width: 800,
              height: 600,
              alt: 'Darts Homes',
            },
          ],
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
      <ChakraProvider>
        <Providers>
          <Global styles={{ body: { minHeight: 'calc(100vh - 24px)' } }} />
          <Component {...pageProps} />
        </Providers>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
