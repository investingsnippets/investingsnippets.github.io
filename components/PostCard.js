import Link from "next/link";
import Image from "./Image";

export default function PostCard({ title, description, img, author, date, tags, topic, slug }) {

  return (
    <article className="rounded w-full lg:flex mb-10" key={slug}>
      <div
        className="h-48 lg:w-48 flex-none bg-cover overflow-hidden opacity-75"
        style={{ backgroundImage: `url('${img}')`}}
        title={`${title}`}
      >
        <div class="relative -bottom-4/5 z-20">
          <Link href="/topic/[slug]" as={`/topic/${topic.id}`}>
            <a className="ml-2 px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center">
            {topic.name}
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal w-full">
        <div>
          <header className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            <Link href="/post/[slug]" as={`/post/${slug}`}>
              <a className="text-2xl lg:text-3xl font-bold text-orange-600 font-display">
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
          <Image
            alt={`${author.name}`}
            src={`${author.image}`}
            previewSrc={`${author.image}`}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
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
          <div className="ml-10 mr-3 lg:flex flex-row">
            {tags.map(({id, color, name}) => (
              <Link href="/tag/[tag]" as={`/tag/${id}`} key={id}>
                <a className={`inline-block ${color} rounded-full px-3 py-1 text-sm text-gray-600 mr-2 my-2`} key={id}>{name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
