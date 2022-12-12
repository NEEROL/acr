import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { HeaderProvider } from '@contexts/HeaderContext';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Script from 'next/script';

const meta = {
  title: 'ACROMED.PL - Bezpłatna opieka medyczna NFZ',
  description:
    'Zadbaj o pełną profilaktykę medyczną w ACROMED (Warszawa), całkowicie BEZPŁATNIE z refundacją NFZ. Udzielamy świadczeń zdrowotnych służących przywracaniu, poprawie i zachowaniu zdrowia pacjentów w każdym wieku, w zakresie podstawowej i specjalistycznej opieki zdrowotnej. Zadbaj o swoje zdrowie już dzisiaj!',
  keywords: [
    'zdrowie',
    'pzu zdrowie',
    'modlitwa o zdrowie',
    'tu zdrowie',
    'dbam o zdrowie',
    'przychodnia zdrowie',
    'na zdrowie',
    'angina leczenie',
    'leczenie kanałowe',
    'znany lekarz',
    'lekarz medycyny pracy',
    'lekarz',
    'lekarz rodzinny',
    'dobry lekarz',
    'lekarz do uszu',
    'medycyna estetyczna',
    'chirurgia plastyczna',
    'lekarz do nerek',
    'lekarz do włosów',
    'szczepienia',
    'pobieranie krwi',
    'lekarz od żył',
    'pielęgniarka',
    'ciąża',
    'dziecko',
    'kobieta',
    'mężczyzna',
    'przychodnia',
    'nfz',
    'przychodnia lekarska',
    'przychodnia nfz',
    'przychodnia zdrowie',
    'przychodnia warszawa',
    'przychodnia mazowieckie',
    'acrodent',
    'acromed',
    'przychodnia zycie',
    'przychodnia wilanow',
    'przychodnia medyk tłuszcz',
    'lekarz rezydent kto to',
    'szpital mswia warszawa'
  ].join(', ')
};

export const titleTemplate = `%s | ${meta.title}`;

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth !important;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        overflow: hidden;
        scroll-behavior: smooth;
    }
`;

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="gIN5dJHG93KDReno0wpIcNITqRpiaokjddpQx4oGMcw" />
        <Script
          id="ga"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTMID}');`
          }}
        ></Script>
      </Head>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: meta.keywords
          },
          {
            name: 'author',
            content: 'RECCLY Development studio@reccly.pl'
          }
        ]}
        openGraph={{
          type: 'website',
          title: meta.title,
          locale: 'pl_PL',
          url: `https://${process.env.PUBLIC_URL}${asPath}`,
          description: meta.description,
          images: [
            {
              url: `https://${process.env.PUBLIC_URL}/logo_og.png`,
              width: 1000,
              height: 1000
            }
          ],
          site_name: meta.title
        }}
      />
      <GlobalStyles />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTMID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
      <Script
        id="analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GAID}`}
      ></Script>
      <Script
        id="analytics_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GAID}');`
        }}
      ></Script>
      <Script
        id="chatbox"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            `var chatbox = document.getElementById('fb-customer-chat');chatbox.setAttribute("page_id", "${process.env.NEXT_PUBLIC_FB_PAGE_ID}");chatbox.setAttribute("attribution", "biz_inbox");`.trim()
        }}
      ></Script>
      <Script
        id="fb_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {FB.init({xfbml: true,version: 'v14.0'});};(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));`
        }}
      ></Script>
    </>
  );
}

export default App;
