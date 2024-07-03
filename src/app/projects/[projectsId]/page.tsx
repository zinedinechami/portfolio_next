"use client";

import { GeistSans } from "geist/font/sans";
import Image from "next/image";

import projects_database from "../../projects_database.json";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  img: string;
  github: string;
  live_demo: string;
  blog_post: string;
};

export default function Page({ params }: { params: { projectsId: string } }) {
  const id = params.projectsId;
  const [data, setData] = useState<Project | null>(null);

  console.log(id);

  useEffect(() => {
    setData(
      projects_database.find((findObject) => findObject.id === id) || null
    );
  }, [id]);

  console.log(data);

  return (
    <>
      <body className="lg:w-6/12 md:w-8/12 w-11/12 sm:pl-10 mx-auto bg-neutral-950 ">
        <main className={GeistSans.className}>
          <section className="pb-44 pt-20">
            <a href="/" className="">
              <p className="text-sm text-neutral-400 mb-4 flex hover:text-neutral-200 transition-colors font-medium">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 mr-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Zinedine
              </p>
            </a>

            <div className="pt-6 flex pb-4 relative">
              <h1 className="text-neutral-200 text-3xl  font-medium ">
                {data?.title}
              </h1>
              <div className="	absolute right-0 flex">
                <a href="https://github.com/zinedinechami">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-6 mt-3 hover:text-neutral-400 transition-colors"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
                <a
                  className="pr-4 mr-2 flex bg-neutral-200 py-3 px-7 text-neutral-950 rounded-full hover:bg-neutral-50 transition-colors "
                  href={data?.live_demo}
                >
                  Visit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>{" "}
              </div>
            </div>
            {data && (
              <a href={data?.live_demo}>
                <div className="w-full  my-6 rounded-lg">
                  <Image
                    src={data?.img}
                    width={1200}
                    height={1000}
                    alt="asac"
                    className="rounded-xl border border-neutral-800"
                  />
                </div>
              </a>
            )}
            <p className="text-neutral-400 mt-10">{data?.blog_post}</p>
          </section>
        </main>
      </body>
    </>
  );
}
