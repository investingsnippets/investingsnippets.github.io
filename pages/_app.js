import "styles/global.css";
import "typeface-open-sans";
import "typeface-merriweather";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
