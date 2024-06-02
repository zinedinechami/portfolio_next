import projects_database from "../projects_database.json";
import Image from "next/image";
import Link from "next/link";
import asac from "../assets/asac.png";

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-24">
        <h1 className="text-xl font-semibold text-neutral-200 mb-1">
          Pinned Projects
        </h1>
        <h2 className=" text-neutral-400 mb-6 text-sm">
          All the apps and work that I built and designed.{" "}
        </h2>

        {projects_database.map((data) => {
          return (
            <>
              <Link href={"/projects/" + data.id}>
                <article className="w-full h-50  mb-6 rounded-md   hover:bg-neutral-900  border-neutral-800 transition-colors  cursor-pointer relative">
                  <div className="flex">
                    <div className="pt-5 mx-6 pb-5 ">
                      <Image
                        src={data.img}
                        width={320}
                        height={350}
                        quality={100}
                        alt={data.title}
                        className="rounded-md opacity-90 object-fill w-80"
                      />
                    </div>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-6 mr-2 absolute right-6 bottom-6 sm:flex hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg> */}

                    <div className="pt-6">
                      <h1 className=" font-medium pb-1 ">{data.title} </h1>

                      <p className="sm:w-72 w-44  text-neutral-400 sm:text-sm text-xs mb-2">
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
