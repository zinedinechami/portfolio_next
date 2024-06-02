"use client";

import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Header from "@/app/componenets/header";
import projects_database from "../../projects_database.json";
import { useEffect, useState } from "react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;

  img: string;
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
      {data && (
        <body className="lg:w-6/12 md:w-8/12 w-11/12 sm:pl-10 mx-auto bg-neutral-950 ">
          <main className={GeistSans.className}>
            <Header />
            <section className="pb-44">
              <a href="/#projects">
                <p className="text-sm text-neutral-400 mb-8 flex mt-1">
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
                  back
                </p>
              </a>

              <h1 className="text-neutral-200 text-3xl font-bold ">
                {data?.title}
              </h1>
              <div className="w-full h-80 bg-neutral-800 my-6 rounded-lg">
                <Image
                  src={data?.img}
                  width={1200}
                  height={1000}
                  alt="asac"
                  className="rounded-lg"
                />
              </div>
              <div className="pt-6 flex pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <a
                  className="pr-4 mr-2 flex hover:underline underline-offset-3 "
                  href=""
                >
                  Live Demo{" "}
                </a>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <a href="" className="flex hover:underline underline-offset-3 ">
                  Code Repo
                </a>
              </div>
              <p className="text-neutral-400">{data?.blog_post}</p>
            </section>
          </main>
        </body>
      )}
    </>
  );
}
