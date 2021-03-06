import PropTypes from "prop-types";
import Head from "next/head";
import { getSiteMetaData } from "utils/helpers";

export default function SEO({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {metaTitle}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
    </Head>
  );
}

SEO.defaultProps = {
  title: '',
  description: ''
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
