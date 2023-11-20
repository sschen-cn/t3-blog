import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      {/* header */}
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-200 bg-white">
        {/* this is header */}
        <div>
          <IoReorderThree className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">stuchen blog</div>
        <div className="flex items-center space-x-4">
          <div>
            <FaRegBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-8 w-8 rounded-full bg-gray-600"></div>
          </div>
          <div>
            <button className="flex items-center space-x-3 rounded-lg border border-gray-200 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
              <div>
                <FaRegEdit />
              </div>
              <div>Write</div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-12">
        {/* this is main */}
        <main className="col-span-8 border-r border-gray-300 px-20">
          <div className="flex w-full flex-col space-y-4 py-10">
            <div className="grid w-full grid-cols-12 items-center">
              <label
                htmlFor="searchBox"
                className="relative col-span-4 w-full rounded-full border border-gray-800"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  id="searchBox"
                  name="search"
                  className="w-full rounded-full px-4 py-1 pl-7 outline-none placeholder:text-xs placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
              <div className="col-span-8 flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div className="rounded-3xl bg-gray-200/50 p-4" key={i}>
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <div>Article</div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
                  <div>Following</div>
                  <div>
                    <IoChevronDownSharp className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-5 border-b border-gray-300 pb-8 last:border-none"
              >
                <div className="flex w-full items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                  <div>
                    <p className="font-semibold">
                      Stu Chen &#x2022; 22 Dec. 2022
                    </p>
                    <p className="text-sm">developer & gamer</p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className="line-clamp-2 break-words text-2xl font-bold text-gray-800 decoration-yellow-950 group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae, eum. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Obcaecati laborum quam ipsa! Vero
                      doloribus, repudiandae eum ullam pariatur commodi saepe
                      dicta quisquam obcaecati quam ab, nulla molestias tempora
                      atque. Quasi.
                    </p>
                    <p className="line-clamp-6 break-words text-sm text-gray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis fugit tempore id quis laudantium laborum,
                      corrupti, atque numquam, optio impedit delectus? Molestias
                      eum vel consequatur corrupti illum, unde facere. Beatae,
                      aperiam. Dolorum, facilis suscipit. Obcaecati mollitia
                      amet illo distinctio laborum. Recusandae totam ipsa iste
                      maxime animi molestias vero? Amet molestiae rerum ex
                      libero voluptatibus doloremque fugit aspernatur quis quam
                      minima.
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-lg"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="rounded-2xl bg-gray-200/50 px-6 py-2.5"
                      key={i}
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* this is aside */}
        <aside className="col-span-4 flex h-[90vh] w-full scroll-p-4 flex-col p-6">
          <div className="interested">
            <h3 className="my-1 text-lg font-semibold">
              People you might be interested
            </h3>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-row items-center space-x-5">
                  <div className="h-10 w-10 flex-none rounded-full bg-gray-300"></div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Lorem ipsum dolor sit.
                    </div>
                    <div className="text-xs">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam necessitatibus iure, quae, nihil deleniti voluptas
                      nesciunt vitae quam ipsa ex suscipit consectetur
                      architecto assumenda. Eum at dolor incidunt animi dolore.
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center space-x-3 rounded-lg border border-gray-400/50 px-4 py-2.5 transition hover:border-gray-900 hover:text-gray-900">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="read-list">
            <h3 className="list-title my-1 text-lg font-semibold">
              Your reading list
            </h3>
            <div className="list-content group flex flex-col space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="content-item flex items-center space-x-4"
                >
                  <div className="item-avatar aspect-square h-full w-2/5 rounded-xl bg-gray-300"></div>
                  <div className="item-article flex w-3/5 flex-col space-y-2">
                    <div className="article-title line-clamp-1 text-lg font-semibold decoration-yellow-950  group-hover:underline">
                      Lorem ipsum dolor sit.
                    </div>
                    <div className="article-content line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga necessitatibus reiciendis quae dignissimos harum. Eos
                      excepturi perspiciatis, id velit modi, nobis ea reiciendis
                      aliquid quo molestiae nesciunt laudantium officiis
                      cupiditate?
                    </div>
                    <div className="flex w-full items-center space-x-4">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                      <div>Stu Chen</div>
                      <div>22 Dec. 2022</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
