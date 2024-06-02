import Image from "next/image";
import pfp from "../../../public/assets/profile_picture.png";

// add links below text

export default function About() {
  return (
    <>
      <section id="about" className="pt-6 pb-24 sm:w-11/12">
        <div className="flex pb-3 ">
          <Image
            src={pfp}
            width={70}
            height={80}
            quality={100}
            alt="profile picture"
            className="rounded-full  bg-neutral-800  "
          />
          <div className="ml-4 mt-2 ">
            <h1 className="text-2xl font-bold text-neutral-200 ">
              Zinedine Chami
            </h1>
            <h2 className="text-base  text-neutral-200 font-medium   ">
              Web Developer
            </h2>
          </div>
        </div>
        <p className="text-neutral-400 text-md  ">
          Hi there, I&apos;m a 20 y/o student in full-stack development.
          Originating from London and currently living in France, I like to
          build for the web with a design-oriented approach.
        </p>
        <div className="pt-4 flex text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <a
            className="pr-4 mr-2 flex hover:underline underline-offset-3 "
            href=""
          >
            View my CV{" "}
          </a>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <a href="" className="flex hover:underline underline-offset-3 ">
            Send me an email
          </a>
        </div>
      </section>
    </>
  );
}
