import projects_database from "../projects_database.json";
import Image from "next/image";
import Link from "next/link";
import asac from "../assets/asac.png";

// add image load blur

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-20">
        <h1 className="text-xl font-semibold text-neutral-200 mb-4">
          My Pinned Projects
        </h1>

        {projects_database.map((data) => {
          return (
            <>
              <Link href={"/projects/" + data.id}>
                <article className="w-full   mb-6 rounded-xl  border  border-neutral-950 hover:scale-105 transition-all hover:border-neutral-900 hover:bg-neutral-900/60   cursor-pointer relative">
                  <div className="flex">
                    <div className="pt-2 pb-2 ml-2 mr-4 sm:flex hidden">
                      <Image
                        src={data.img}
                        width={320}
                        height={350}
                        quality={100}
                        alt={data.title}
                        className="rounded-xl  object-fill w-96 border border-neutral-800"
                      />
                    </div>

                    <div className="pt-6 ml-10 sm:ml-0">
                      <h1 className="  text-xl mb-2 ">{data.title} </h1>

                      <p className="sm:w-64 w-full  text-neutral-400 sm:text-sm text-xs mb-2">
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
