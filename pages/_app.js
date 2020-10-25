import "styles/global.css";
import "typeface-open-sans";
import "typeface-merriweather";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'
import 'katex/dist/katex.min.css';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
