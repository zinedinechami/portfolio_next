import projects_database from "../projects_database.json";
import Image from "next/image";
import Link from "next/link";
import asac from "../assets/asac.png";

// add image load blur

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-32 ">
        <h1 className="text-lg font-medium text-neutral-50 mb-6">
          My Pinned Projects
        </h1>

        <div className="flex flex-wrap ">
          {projects_database.map((data) => {
            return (
              <>
                <Link
                  href={"/projects/" + data.id}
                  className="w-full  sm:w-80 mr-5"
                >
                  <article className="w-full  sm:w-80 mb-4        transition-all hover:opacity-60    relative">
                    <div className="flex  flex-wrap ">
                      <div className=" mb-3">
                        <Image
                          src={data.img}
                          width={350}
                          height={350}
                          quality={100}
                          alt={data.title}
                          className="rounded-md object-fill w-80 h-40 border border-neutral-800"
                        />
                      </div>

                      <div className=" ">
                        <h1 className="  text-base ">{data.title} </h1>

                        <p className=" w-11/12  text-neutral-400 text-sm  mb-2">
                          {data.description}
                        </p>
                        <div className="flex pt-2"></div>
                      </div>
                    </div>
                  </article>
                </Link>
              </>
            );
          })}
        </div>
        <a href="https://github.com/zinedinechami">
          <p className="text-sm flex text-neutral-400 hover:text-neutral-200 transition-colors mt-4">
            {" "}
            View more Projects{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </a>
      </section>
    </>
  );
}
