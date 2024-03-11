// *** Fonts ***
import { Nunito_SansFont } from './ui/fonts';

// *** Styles ***
import './ui/global.css';
import './ui/style.scss';
import './ui/variables.css';
import 'swiper/swiper-bundle.css';
import 'react-circular-progressbar/dist/styles.css';

// *** UI ***
import { Footer } from './ui/footer';
import { Header } from './ui/header/header';
import { Metadata } from 'next';

import { GlobalContextProvider } from './lib/Context/store';

import './ui/sakura.css';
import { SakuraEffect } from './ui/sakura/sakur';

export const metadata: Metadata = {
  metadataBase: new URL('https://anikon.netlify.app'),
  title: {
    default: ' Kinochi Tv',
    template: '%s | Kinochi Tv',
  },
  description: "Kinochi Tv O'zbekistondagi eng yirin kino platformasi",
  verification: {
    google:
      'google-site-verification=cTNroJuqFQhtcLpQZL-laH_7xRvT5FWO4IoD81VIiMw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Nunito_SansFont.className}>
        <GlobalContextProvider>
          <Header />
          {children}
          <Footer />

          <SakuraEffect />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
