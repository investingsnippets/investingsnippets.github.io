import Link from "next/link";
import { Component } from 'react'
import { getSiteMetaData } from "utils/helpers";
import PropTypes from "prop-types";


class Header extends Component {

  constructor (props) {
    super(props)
    this.state = {
      'active': false
    }
    this.siteMetadata = getSiteMetaData();
    this.hamburgerMenuClick = this.hamburgerMenuClick.bind(this);
  }

  hamburgerMenuClick = e => {
    e.preventDefault();
    const {active} = this.state
    if(active) {
      this.setState({'active': false,})
    } else {
      this.setState({'active': true,})
    }
  }

  render () {
    const { allTopics } = this.props;
    const { active } = this.state;
    return (
      <header className="container">
        <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full pt-4">
          <div className="flex flex-no-shrink items-stretch h-12">
            <Link href="/">
              <a className="flex-no-grow flex-no-shrink relative p-2 leading-normal text-3xl lg:text-5xl no-underline font-semibold text-gray-700 flex items-center">
                {this.siteMetadata.title}
              </a>
            </Link>
            <button id="hamburgerMenu" type="button" onClick={this.hamburgerMenuClick} className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
              <svg id="hamburgerBtn" className={`${active ? 'hidden' : 'visible'} fill-current text-gray-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              <svg id="hamburgerClose" className={`${active ? 'visible' : 'hidden'} fill-current text-gray-700`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
            </button>
          </div>
          <div className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${active ? 'visible' : 'hidden'}`} id="mobileMenu">
            <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
              {allTopics.map(({id, name})=>(
                <Link href="/topic/[topic]" as={`/topic/${id}`} key={name}>
                  <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold text-gray-700 no-underline flex items-center hover:bg-grey-dark">
                    <span>{name}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  allTopics: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  allTopics: [{id: 'test1', name: 'test1'}, {id: 'test2', name: 'test2'}]
};

export default Header