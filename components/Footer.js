import { getSiteMetaData } from "utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import PropTypes from "prop-types";

function AppIcon(props) {
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

AppIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default function Footer() {
  const {social, disclaimer, title} = getSiteMetaData();

  return (
    <footer className="border-t py-12 px-2">
      <div className="flex pb-4">

        <div className="flex-auto">
          <h6>
            <Link href="/">
              <a className="font-semibold text-gray-700 mb-4 no-underline">
                Home
              </a>
            </Link>
          </h6>
        </div>

        <div className="flex-auto">
          <h6>
            <Link href="/terms/general-terms">
              <a className="font-semibold text-gray-700 mb-4 no-underline">
                Terms
              </a>
            </Link>
          </h6>
        </div>

        <div className="flex-auto flex-no-wrap flex-shrink-0 text-center">
          <AppIcon icon={faTwitter} link={`https://twitter.com/${social.twitter}`} />
          <AppIcon icon={faGithub} link={`https://github.com/${social.github}`} />
          <AppIcon
            icon={faLinkedin}
            link={`https://www.linkedin.com/in/${social.linkedin}/`}
          />
        </div>

      </div>
      <div className="text-sm my-2 leading-4 text-gray-600">
        {disclaimer}
      </div>
      <div className="my-2 text-sm text-gray-600">
        Copyright © 
        {' '}
        {new Date().getFullYear()}
        , 
        {' '}
        {title}
      </div>
    </footer>
  );
}
