import Link from "next/link";
import { getSiteMetaData } from "utils/helpers";
import Bio from "./Bio";

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
        <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Popular Topics </h5>
        <ul>
          {topics.slice(0, topicLimit).map(({slug, name, count})=>(
            <li className="p-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300" key={slug}>
              <Link href="/topic/[topic]" as={`/topic/${slug}`}>
                <a className="flex items-center text-gray-600 cursor-pointer">
                  <span className="inline-block h-4 w-4 bg-green-300 mr-3" />
                  <span>{name}</span>
                  <span className="text-gray-500 ml-auto">
                    {count}
                    {' '}
                    articles
                  </span>
                  <i className='text-gray-500 bx bx-right-arrow-alt ml-1' />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- divider --> */}
      <div className="border border-dotted" />

      {/* <!-- subscribe --> */}
      <div className="opacity-25 my-2 lg:my-4">
        <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
        <p className="text-gray-600">
          Receive the next blog article directly to your mail box!
        </p>
        <input
          placeholder="your email address"
          className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border outline-none"
          disabled
        />
        <button className="px-4 py-2 bg-orange-600 text-gray-200 rounded-b w-full capitalize tracking-wide" disabled>
          Subscribe
        </button>
        <p className="text-gray-600 pt-2 text-xs text-center">
          or, follow the 
          {' '}
          <Link href="/feed.xml"><a>RSS feed</a></Link>
          !
        </p>
      </div>

      {/* <!-- divider --> */}
      <div className="border border-dotted invisible lg:visible" />
    </div>
  );
}
