/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import Image from "components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export function AppIcon(props) {
  // eslint-disable-next-line react/prop-types
  const { link, icon, width } = props
  return (
    <a
      href={link}
      className="inline-block text-orange-600 hover:text-blue-700 no-label px-2"
      target="_blank"
      rel='noreferrer'
    >
      <FontAwesomeIcon width={width} icon={icon} />
    </a>
  );
}

