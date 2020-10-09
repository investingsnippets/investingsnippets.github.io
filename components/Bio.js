import { getSiteMetaData } from "utils/helpers";
import { useEffect } from 'react';

export default function Bio() {
  const { title, description, social } = getSiteMetaData();

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
          {' '}
        </a>
      </div>
      <div className="flex py-1">
        <iframe title="facebook buttons" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.investingsnippets.com%2F&width=450&layout=standard&action=like&size=small&share=true&height=35&appId" width="450" height="35" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
      </div>
    </content>
  );
}
