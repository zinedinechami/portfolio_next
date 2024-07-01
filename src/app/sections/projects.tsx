import projects_database from "../projects_database.json";
import Image from "next/image";
import Link from "next/link";
import asac from "../assets/asac.png";

// add image load blur

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-20 ">
        <h1 className="text-xl font-semibold text-neutral-200 mb-6">
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
                  <article className="w-full  sm:w-80 mb-2 rounded-xl  border  border-neutral-950 hover:scale-105 transition-all hover:border-neutral-900 hover:bg-neutral-900/60   cursor-pointer relative">
                    <div className="flex  flex-wrap">
                      <div className="pt-2 pb-2 ml-3 mr-3 ">
                        <Image
                          src={data.img}
                          width={320}
                          height={350}
                          quality={100}
                          alt={data.title}
                          className="rounded-xl object-fill w-80 border border-neutral-800"
                        />
                      </div>

                      <div className=" ml-3">
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
      </section>
    </>
  );
}
