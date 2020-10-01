
import Link from "next/link";
import PropTypes from "prop-types";

export default function PopularTopics({ topics, topicLimit }) {
 
  return (
    <content>
      <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Popular Topics </h5>
      <ul>
        {topics.slice(0, topicLimit).map(({slug, name, color, count})=>(
          <li className="p-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300" key={slug}>
            <Link href="/topic/[topic]" as={`/topic/${slug}`}>
              <a className="flex items-center text-gray-600 cursor-pointer">
                <span className={`inline-block h-4 w-4 ${color} mr-3`} />
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
  topics: [],
  topicLimit: 0
};

PopularTopics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object),
  topicLimit: PropTypes.number
};
