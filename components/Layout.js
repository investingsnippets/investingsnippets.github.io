import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";


export default function Layout({ children, topics }) {

  return (
    <div className="overflow-hidden items-center justify-center bg-gray-100 max-w-screen-xl mx-auto">
      <Header />
      <main className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* <!-- children --> */}
        <div className="w-full lg:w-2/3 px-2">
          {children}
        </div>

        {/* <!-- right sidebar --> */}
        <Sidebar topics={topics} />
      </main>
      <Footer />
    </div>
  );
}
