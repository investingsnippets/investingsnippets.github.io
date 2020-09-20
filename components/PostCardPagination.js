import { getSiteMetaData } from "utils/helpers";
import Link from "next/link";
import PostCard from "components/PostCard";
import { useRouter } from 'next/router'

export default function PostCardPagination({children, total}) {
  const router = useRouter();
  const rQuery = router.query;
  var path = '';
  if (router.pathname.includes("slug")) {
    path = router.pathname.replace(/\[slug\]/g, rQuery.slug);
  }
  
  const currentPage = rQuery.hasOwnProperty('page')? parseInt(rQuery.page) : 1;
  const siteMetadata = getSiteMetaData();
  const pageLimit = siteMetadata.paginationLimit;

  const slices = Math.ceil(total/pageLimit);
  const prevPage = currentPage == 1 ? 1 : currentPage - 1;
  const nextPage = currentPage == slices ? currentPage : currentPage + 1;

  const childFrom = (currentPage - 1) * pageLimit
  const childTo = (currentPage * pageLimit)

  return (
    <>
      <div>
        {children.slice(childFrom, childTo).map(({ frontmatter, slug }) => (
          <PostCard {...frontmatter} slug={slug} key={slug}/>
        ))}
      </div>
      { slices > 1 && 
      <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <Link href={`${path}/?page=${prevPage}`}>
            <a className={`${currentPage != 1 ? 'visible' : 'invisible' } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
              Previous
            </a>
          </Link>
          <Link href={`${path}/?page=${nextPage}`}>
            <a className={`${currentPage != slices ? 'visible': 'invisible'} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
              Next
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm leading-5 text-gray-700">
              Showing
              <span className="font-medium mx-1">{childFrom}</span>
              to
              <span className="font-medium mx-1">{childTo}</span>
              of
              <span className="font-medium mx-1">{total}</span>
              results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex">
              <Link href={`${path}/?page=${prevPage}`}>
                <a className={`${currentPage != 1 ? 'visible' : 'invisible' } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous`}>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
              { Array(slices).fill().map((_, i) => 
                <Link href={`${path}/?page=${i+1}`} key={i+1}>
                  <a className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 ${i+1 == currentPage? 'bg-orange-600': 'bg-white'} text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
                    {i+1}
                  </a>
                </Link>
              )}
              {/* 
              <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
                ...
              </span>
              */}
              <Link href={`${path}/?page=${nextPage}`}>
                <a className={`${currentPage != slices ? 'visible': 'invisible'} -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next`}>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      }
    </>
  );
}
