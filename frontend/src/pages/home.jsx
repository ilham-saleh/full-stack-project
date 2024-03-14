import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

import { Card, Loader, FormField } from "../components/home/index";
import { useState } from "react";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0)
    return data.map((post) => <Card key={post.id} {...post} />);

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  const [searchText, setSearchText] = useState("");

  return (
    <>
      {/* <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf3]">
        <img src={logo} alt="App Logo" className="w-28 object-contain" />

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header> */}

      <main className="bg-[#f9fafe] sm:p-8 px-4 py-8 w-full min-h-[100vh]">
        <section className="max-w--7xl max-auto">
          <div>
            <h1 className="font-extrabold text-[#222328] text-[30px]">
              The Community
            </h1>
            <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
              Browse through a collection of images generated by AI
            </p>
          </div>

          <div className="mt-16">
            <FormField />
          </div>

          <div className="mt-10">
            {loading ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <>
                {searchText && (
                  <h2 className="font-small text-[#666e75] text-xl mb-3">
                    Showing results for{" "}
                    <span className="text-[#222328]">{searchText}</span>
                  </h2>
                )}
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                  {searchText ? (
                    <RenderCards data={[]} title="no search results" />
                  ) : (
                    <RenderCards data={[]} title="no posts found" />
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
