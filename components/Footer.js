import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";

export default function Footer() {
  const {disclaimer, title} = getSiteMetaData();

  return (
    <footer className="border-t py-12 px-2">
      <div className="flex pb-4">

        <div className="flex-auto">
          <h6>
            <Link href="/">
              <a className="font-semibold text-gray-700 mb-4 no-underline">
                Home
              </a>
            </Link>
          </h6>
        </div>

        <div className="flex-auto">
          <h6>
            <Link href="/terms/general-terms">
              <a className="font-semibold text-gray-700 mb-4 no-underline">
                Terms
              </a>
            </Link>
          </h6>
        </div>
      </div>
      <div className="text-sm my-2 leading-4 text-gray-600">
        {disclaimer}
      </div>
      <div className="my-2 text-sm text-gray-600">
        Copyright © 
        {' '}
        {new Date().getFullYear()}
        , 
        {' '}
        {title}
      </div>
    </footer>
  );
}
