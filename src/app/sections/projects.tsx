import projects_database from "../projects_database.json";
import Image from "next/image";
import Link from "next/link";
import asac from "../assets/asac.png";

// add image load blur

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-20 ">
        <h1 className="text-lg font-medium text-neutral-50 mb-6">
          My Recent Work
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
                          width={320}
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
      </section>
    </>
  );
}
