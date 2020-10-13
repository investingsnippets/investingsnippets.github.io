
import Link from "next/link";
import PropTypes from "prop-types";

export default function PopularTopics({ sortedTopics }) {
 
  return (
    <content>
      <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Topics </h5>
      <ul>
        {sortedTopics.map(({slug, name, count})=>(
          <li className="p-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300" key={slug}>
            <Link href="/topic/[topic]" as={`/topic/${slug}`}>
              <a className="flex items-center text-gray-600 cursor-pointer">
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
    </content>
  )
}

PopularTopics.defaultProps = {
  sortedTopics: []
};

PopularTopics.propTypes = {
  sortedTopics: PropTypes.arrayOf(PropTypes.object)
};
