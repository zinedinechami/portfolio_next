import projects_database from "../projects_database.json";
import Image from "next/image";
import Link from "next/link";
import asac from "../assets/asac.png";

// todo: create map for projects

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-24">
        <h1 className="text-2xl font-bold text-neutral-200 pb-1">
          My Projects
        </h1>
        <h2 className=" text-neutral-400">
          All the apps and work that I built and designed.{" "}
        </h2>

        {projects_database.map((data) => {
          return (
            <>
              <Link href={"/projects/" + data.id}>
                <article className="w-full   my-8 rounded-lg  bg-neutral-900 hover:bg-neutral-900/70 border border-neutral-800 transition-colors  cursor-pointer relative">
                  <div className="flex">
                    <div className="pt-5 mx-6 pb-5">
                      <Image
                        src={asac}
                        width={320}
                        height={320}
                        quality={100}
                        alt={data.title}
                        className="rounded-lg "
                      />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-6 mr-2 absolute right-4 bottom-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>

                    <div className="pt-6">
                      <h1 className=" font-medium pb-2">{data.title} </h1>

                      <p className="w-72 text-neutral-400 text-sm mb-2">
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
      </section>
    </>
  );
}
