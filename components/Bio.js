import { getSiteMetaData } from "utils/helpers";
import Image from "./Image";

export default function Bio() {
  const { title, description, social } = getSiteMetaData();

  return (
    <>
      <h5 className="font-semibold text-lg uppercase text-gray-700">
        About
        {title} 
      </h5>
      <div className="flex items-center my-5">
        {/* <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      /> */}
        <p className="text-base leading-7">
          {description}
        </p>
      </div>
      <div className="flex">
        <a href={`https://twitter.com/${social.twitter}`} className="twitter-follow-button" data-show-count="false" data-show-screen-name="false">
          Follow @
          {social.twitter}
        </a>
      </div>
    </>
  );
}
