import Image from "next/image";
import asac from "../assets/asac.png";

export default function ProjectCard() {
  return (
    <>
      <article className="w-11/12 h-48  my-6 rounded-md hover:border hover:bg-neutral-900 transition-colors border-neutral-800 cursor-pointer">
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
          <div className="pt-4">
            <h1 className=" font-semibold pb-4">
              Asac - Reservations dApparetements
            </h1>
            <p className="w-80 text-neutral-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              ipsum, temporibus doloribus mollitia minima molestias inventore at
              voluptas accusantium sequi{" "}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
