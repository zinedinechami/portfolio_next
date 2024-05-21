import Image from "next/image";
import asac from "../assets/asac.png";

export default function ProjectCard() {
  return (
    <>
      <article className="w-11/12 h-48  my-6 rounded-md hover:border hover:bg-neutral-900 transition-colors border-neutral-800 cursor-pointer relative">
        <div className="flex">
          <div className="p-4">
            <Image
              src={asac}
              width={350}
              height={350}
              quality={100}
              alt="asac"
              className="rounded border"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6 mr-2 absolute right-3 top-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <div className="pt-4">
            <h1 className=" font-medium pb-4">Asac </h1>

            <p className="w-80 text-neutral-400 text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              ipsum,
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
