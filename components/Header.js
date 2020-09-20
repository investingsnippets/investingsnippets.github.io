import Link from "next/link";
import { getSiteMetaData } from "utils/helpers";

export default function Header({}) {
  const siteMetadata = getSiteMetaData();

  const header = (
    <h1 className="mb-2 px-2">
      <Link href="/">
        <a className="text-3xl font-black text-black no-underline font-display">
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
