/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import Image from "components/Image";
import SiteConfig from "../site.config";

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

export function MarkdownImage({ alt, src }) {
  return (
    <Image
      alt={alt}
      src={require(`../content/assets/${src}`)}
      previewSrc={require(`../content/assets/${src}?lqip`)}
      className="w-full"
    />
)}
