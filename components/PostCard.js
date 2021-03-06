import PropTypes from "prop-types";
import Link from "next/link";
import { getSiteMetaData } from "utils/helpers";
import Image from "./Image";

export default function PostCard({ title, description, img, author, date, tags, topic, slug }) {
  const { siteUrl } = getSiteMetaData();

  return (
    <article className="rounded w-full lg:flex mb-10" key={slug}>
      <div
        className="h-48 lg:w-48 flex-none bg-cover overflow-hidden opacity-75"
        style={{ backgroundImage: `url('${img}')`}}
        title={`${title}`}
      >
        <div className="relative -bottom-4/5 z-20">
          <Link href={`/topic/${topic.id}`}>
            <a className="ml-2 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center">
              {topic.name}
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal w-full">
        <div>
          <header className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            <Link href={`/post/${slug}`}>
              <a className="text-2xl lg:text-3xl font-bold font-display">
                {title}
              </a>
            </Link>
          </header>
          <section>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </section>
        </div>
        <div className="flex mt-3 flex-row">
          <div className="px-1 inline-block">
            <Image
              alt={`${author.name}`}
              src={`${author.image}`}
              previewSrc={`${author.image}`}
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
          </div>
          <div className="inline-block">
            <p className="font-semibold text-gray-700 text-sm capitalize"> 
              {' '}
              {author.name}
              {' '}
            </p>
            <p className="text-gray-600 text-xs"> 
              {' '}
              {date}
              {' '}
            </p>
          </div>
          <div className="ml-10 mr-3 sm:flex flex-row">
            {tags.map(({id, icon, name}) => (
              <div className="bg-gray-200 pr-1 pb-1 text-sm mr-2 my-3 flex justify-items-center" key={id}>
                <Link href={`/tag/${id}`} key={id}>
                  <a className="text-gray-600" key={id}>
                    <div className="px-1 inline-block">
                      <Image
                        className="filter-orange-700 h-3 w-4"
                        alt={`${name}`}
                        src={`${siteUrl}/static/${icon}`}
                        data-srcset={`${siteUrl}/static/${icon}`}
                      />
                    </div>
                    <div className="inline-block">
                      {name}
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  topic: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  slug: PropTypes.string.isRequired
}
