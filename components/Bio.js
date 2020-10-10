import { getSiteMetaData } from "utils/helpers";
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

function AppIcon(props) {
  // eslint-disable-next-line react/prop-types
  const { link, icon } = props
  return (
    <a
      href={link}
      className="inline-block text-orange-600 hover:text-blue-700 no-label px-2"
      target="_blank"
      rel='noreferrer'
    >
      <FontAwesomeIcon width="25px" icon={icon} />
    </a>
  );
}

export default function Bio() {
  const { title, description, social, siteUrl } = getSiteMetaData();

  useEffect(() => {
    const t = document.createElement("script");
    t.setAttribute("src", "https://platform.twitter.com/widgets.js");
    t.setAttribute("async", "true");
    document.head.appendChild(t);
  }, []);

  return (
    <content>
      <h5 className="font-semibold text-lg uppercase text-gray-700">
        About
        {' '}
        {title} 
      </h5>
      <div className="flex-auto flex-no-wrap flex-shrink-0 text-center pt-5">
        {social.twitter && (<AppIcon icon={faTwitter} link={`https://twitter.com/${social.twitter}`} />)}
        {social.github && (<AppIcon icon={faGithub} link={`https://github.com/${social.github}`} />)}
        {social.github && (<AppIcon icon={faLinkedin} link={`https://www.linkedin.com/in/${social.linkedin}/`} />)}
        {social.facebook && (<AppIcon icon={faFacebook} link={`https://${social.facebook.id}/`} />)}
      </div>
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
      { social.twitter && (
        <div className="flex">
          <a href={`https://twitter.com/${social.twitter}`} className="twitter-follow-button" data-show-count="false" data-show-screen-name="false">
            {' '}
          </a>
        </div>
        )}
      { social.facebook && social.facebook.page && (
        <div className="flex py-1">
          <iframe title="facebook buttons" src={`https://www.facebook.com/plugins/like.php?href=${encodeURIComponent(siteUrl)}%2F&width=450&layout=standard&action=like&size=small&share=true&height=35&appId`} width="450" height="35" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
        </div>
        )}
    </content>
  );
}
