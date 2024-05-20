import Image from "next/image";
import pfp from "../assets/profile_picture.png";

// add links below text

export default function About() {
  return (
    <>
      <section className="pt-16 pb-32 ">
        <div className="flex pb-4 ">
          <Image
            src={pfp}
            width={90}
            height={90}
            quality={100}
            alt="profile picture"
            className="rounded-full border border-neutral-800 opacity-90"
          />
          <div className="ml-6 mt-4 ">
            <h1 className="text-3xl font-bold text-neutral-200 ">
              Zinedine Chami
            </h1>
            <h2 className="text-xl  text-neutral-300 font-medium  ">
              Web Developer
            </h2>
          </div>
        </div>
        <p className="text-neutral-400 w-10/12  ">
          Hi there, originating from London and currently living in France,
          I&apos;m a 20 y/o student in full-stack development who likes to build
          for the web with a design oriented approach.
        </p>
        <div className="pt-5 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <a className="pr-4 mr-2 flex hover:underline " href="">
            View my CV{" "}
          </a>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <a href="" className="flex hover:underline ">
            Send me an email
          </a>
        </div>
      </section>
    </>
  );
}
