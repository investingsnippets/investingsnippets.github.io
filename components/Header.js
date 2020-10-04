import Link from "next/link";
import { getSiteMetaData } from "utils/helpers";

export default function Header({ allTopics }) {
  const siteMetadata = getSiteMetaData();

  const header = (
    <h1 className="mb-2 px-2">
      <Link href="/">
        <a className="text-4xl lg:text-5xl no-underline font-semibold text-gray-700">
          {siteMetadata.title}
        </a>
      </Link>
    </h1>
  );

  return (
    <header className="flex items-center justify-between py-2 border-b">
      {header}
      <ul class="inline-flex items-center">
        {allTopics.map(({id, name, color})=>(
          <li class="px-2 md:px-4">
            <Link href="/topic/[topic]" as={`/topic/${id}`}>
              <a className="flex text-gray-600 font-semibold">
                <span>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
