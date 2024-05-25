import projects_database from "../products.json";
import Image from "next/image";
import asac from "../assets/asac.png";

// todo: create map for projects

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-28">
        <h1 className="text-2xl font-bold text-neutral-200">My Projects</h1>
        <h2 className=" text-neutral-400">
          All my side projects that I built and designed.{" "}
        </h2>

        {projects_database.map((data) => {
          return (
            <>
              <a href={"/projects/" + data.id}>
                <article className="w-full h-48  my-8 rounded-lg border bg-neutral-900/40 hover:bg-neutral-900/80  transition-colors border-neutral-900 cursor-pointer relative">
                  <div className="flex">
                    <div className="pt-6 mx-6 ">
                      <Image
                        src={asac}
                        width={300}
                        height={320}
                        quality={100}
                        alt={data.title}
                        className="rounded-lg border"
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

                      <p className="w-80 text-neutral-400 text-sm mb-2">
                        {data.description}
                      </p>
                      <div className="flex pt-2">
                        <article className="text-xs p-2 bg-neutral-900 border border-neutral-800 rounded mr-2">
                          {data.tags}
                        </article>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </>
          );
        })}
      </section>
    </>
  );
}
