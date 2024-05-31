"use client";

import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Header from "@/app/componenets/header";
import projects_database from "../../projects_database.json";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  img: string;
  blog_post: string;
};

export default function Page({ params }: { params: { projectsId: string } }) {
  const id = params.projectsId;
  const [data, setData] = useState<Project | null>(null);

  console.log(id);

  useEffect(() => {
    setData(projects_database.find((findObject) => findObject.id === id));
  }, [id]);

  console.log(data);

  return (
    <>
      <body className="w-6/12 pl-10 mx-auto bg-neutral-950 ">
        <main className={GeistSans.className}>
          <Header />
          <section className="pb-44">
            <a href="/">
              <p>{data?.id}</p>
              <p className="text-sm text-neutral-500 mb-8 flex mt-1">
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
                Back
              </p>
            </a>

            <h1 className="text-neutral-200 text-3xl font-semibold ">Asac</h1>
            <div className="w-full h-96 bg-neutral-800 my-6 rounded-lg">
              {/* <Image src={asac} width={500} height={500} alt="asac" /> */}
            </div>
            <div className="pt-2 flex pb-6">
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
                Github Repo
              </a>
            </div>
            <p className="text-neutral-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              voluptates sunt, perferendis unde rerum quam laudantium aliquam
              impedit consequuntur sint, voluptatibus soluta similique
              perspiciatis, facere amet necessitatibus sit eveniet. Architecto?
            </p>
          </section>
        </main>
      </body>
    </>
  );
}
