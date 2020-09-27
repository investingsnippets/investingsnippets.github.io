import Link from "next/link";

export default function PostCard({ title, description, img, author, date, topics, slug }) {

  return (
    <article className="rounded w-full lg:flex mb-10" key={slug}>
      <div
        className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
        style={{ backgroundImage: `url('${img}')`}}
        title="deit is very important"
      />
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
          <img
            src={`${author.image}`}
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
            {topics.map(({id, name}) => (
              <Link href="/topic/[topic]" as={`/topic/${id}`} key={id}>
                <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600 mr-2 my-2" key={id}>{name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
