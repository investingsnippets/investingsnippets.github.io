import PropTypes from "prop-types"
import { getSiteMetaData } from "utils/helpers";
import Bio from "./Bio";
import Subscribe from './Subscribe'
import PopularTopics from './PopularTopics'
import PopularTags from './PopularTags'


export default function Sidebar({ tags, sortedTopics }) {
  const {sidebar} = getSiteMetaData();
  const tagsLimit = sidebar.tagsLimit || 5;

  return (
    <div className="w-full lg:w-1/3 px-2">
      {/* <!-- divider --> */}
      <div className="border border-dotted mt-4 visible lg:invisible lg:mt-0" />

      {/* <!-- About --> */}
      <div className="my-4 lg:mt-0">
        <Bio />
      </div>

      {/* <!-- divider --> */}
      <div className="border border-dotted" />

      {/* <!-- topics --> */}
      <div className="my-2 lg:my-4">
        <PopularTopics sortedTopics={sortedTopics} />
      </div>

      {/* <!-- divider --> */}
      <div className="border border-dotted" />

      {/* <!-- tags --> */}
      <div className="my-2 lg:my-4">
        <PopularTags tags={tags} tagsLimit={tagsLimit} />
      </div>

      {/* <!-- divider --> */}
      <div className="border border-dotted" />

      {/* <!-- subscribe --> */}
      <div className="opacity-25 my-2 lg:my-4">
        <Subscribe />
      </div>

      {/* <!-- divider --> */}
      <div className="border border-dotted invisible lg:visible" />
    </div>
  );
}

Sidebar.defaultProps = {
  tags: [],
  sortedTopics: []
};

Sidebar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
  sortedTopics: PropTypes.arrayOf(PropTypes.object)
};
