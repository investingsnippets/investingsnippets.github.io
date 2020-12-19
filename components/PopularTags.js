
import Link from "next/link";
import PropTypes from "prop-types";
import { getSiteMetaData } from "utils/helpers";
import Image from "./Image";

export default function PopularTags({ tags, tagsLimit }) {
  const { siteUrl } = getSiteMetaData();
 
  return (
    <content>
      <h5 className="font-semibold text-lg uppercase text-gray-700 mb-2"> Popular Tags </h5>
      <ul>
        {tags.slice(0, tagsLimit).map(({slug, name, icon, count})=>(
          <li className="p-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300" key={slug}>
            <Link href={`/tag/${slug}`}>
              <a className="flex items-center text-gray-600 cursor-pointer">
                <Image
                  className="filter-orange-700 h-4 w-4 mr-3 inline-block"
                  alt={`${name}`}
                  src={`${siteUrl}/static/${icon}`}
                  data-srcset={`${siteUrl}/static/${icon}`}
                />
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

PopularTags.defaultProps = {
  tags: [],
  tagsLimit: 0
};

PopularTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
  tagsLimit: PropTypes.number
};
