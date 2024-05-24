import Image from "next/image";
import asac from "../assets/asac.png";

// w-4 h-6 mr-2 absolute right-3 top-3

export default function ProjectCard() {
  return (
    <>
      <article className="w-full h-48  my-8 rounded-lg border bg-neutral-900/40 hover:bg-neutral-900/80  transition-colors border-neutral-900 cursor-pointer relative">
        <div className="flex">
          <div className="pt-6 mx-6 ">
            <Image
              src={asac}
              width={300}
              height={320}
              quality={100}
              alt="asac"
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
            <h1 className=" font-medium pb-2">Asac </h1>

            <p className="w-80 text-neutral-400 text-sm mb-2">
              Front-End of an appartement reservation service
            </p>
            <div className="flex pt-2">
              <article className="text-xs p-2 bg-neutral-900 border border-neutral-800 rounded mr-2">
                TypeScript
              </article>
              <article className="text-xs p-2 bg-neutral-900 border border-neutral-800 rounded mr-2">
                TypeScript
              </article>
              <article className="text-xs p-2 bg-neutral-900 border border-neutral-800 rounded mr-2">
                TypeScript
              </article>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
