import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // 初始化 AOS 動畫庫
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
