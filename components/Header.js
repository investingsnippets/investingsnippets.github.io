import Link from "next/link";
import { getSiteMetaData } from "utils/helpers";

export default function Header({}) {
  const siteMetadata = getSiteMetaData();

  const header = (
    <h1 className="mb-2 px-2">
      <Link href="/">
        <a className="text-4xl no-underline font-semibold text-gray-700">
          {siteMetadata.title}
        </a>
      </Link>
    </h1>
  );

  return (
  <header className="flex items-center justify-between py-2 border-b">
    {header}
  </header>
  );
}
