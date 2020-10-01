import Link from "next/link";
import { getSiteMetaData } from "utils/helpers";
import Bio from "./Bio";
import Subscribe from './Subscribe'
import PopularTopics from './PopularTopics'

export default function Sidebar({ topics }) {
  const {sidebar} = getSiteMetaData();
  const topicLimit = sidebar.topics || 5;

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
        <PopularTopics topics={topics} topicLimit={topicLimit} />
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
