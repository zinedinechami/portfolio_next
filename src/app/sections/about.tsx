import Image from "next/image";
import pfp from "../../../public/assets/profile_picture.png";

// add links below text

// create new buttons, add github btn

export default function About() {
  return (
    <>
      <section id="about" className="pt-2 pb-20 sm:w-9/12 ">
        <div className="flex pb-3 ">
          {/* <Image
            src={pfp}
            width={80}
            height={80}
            quality={100}
            alt="profile picture"
            className="rounded-full  bg-neutral-800  "
          /> */}
          {/* <div className="ml-4 mt-2 "> */}
          <h1 className="text-3xl mb-1 font-bold text-neutral-200 ">
            hi, i&apos;m Zinedine 👋🏻
          </h1>
          {/* <h2 className="text-xl  text-neutral-200 font-medium   ">
              Web Developer
            </h2>
          </div> */}
        </div>
        <p className="text-neutral-400 text-md  ">
          I&apos;m a 20 y/o student in full-stack development. Originating from
          London and currently living in France, I like to build for the web
          with a design-oriented approach.
        </p>
        <div className="pt-6 flex text-sm">
          <a
            className="pr-4 mr-2 flex  bg-neutral-900 p-1 rounded-lg border border-neutral-800 hover:bg-neutral-900/50 transition-colors "
            href="/assets/CV_Dev.pdf"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-5 mr-2 text-neutral-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            View CV{" "}
          </a>{" "}
          <a
            href="mailto:zinedine.chami@gmail.com"
            className="flex mr-2 bg-neutral-900 p-1 pr-4 rounded-lg border border-neutral-800 hover:bg-neutral-900/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-5 mr-2 text-neutral-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            Send me an email
          </a>
          <a
            href="https://github.com/zinedinechami"
            className="flex  bg-neutral-900 p-1 pr-4 rounded-lg border border-neutral-800 hover:bg-neutral-900/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-5 mr-2 text-neutral-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            My Github
          </a>
        </div>
      </section>
    </>
  );
}
