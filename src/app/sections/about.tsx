import Image from "next/image";
import pfp from "../assets/profile_picture.png";

// add links below text

export default function About() {
  return (
    <>
      <section className="pt-16 pb-28 ">
        <div className="flex pb-6">
          <Image
            src={pfp}
            width={100}
            height={100}
            quality={100}
            alt="profile picture"
            className="rounded-full"
          />
          <div className="ml-6 mt-4 text-neutral-200">
            <h1 className="text-3xl font-bold ">Zinedine Chami</h1>
            <h2 className="text-xl    ">Web Developer</h2>
          </div>
        </div>

        <p className="text-neutral-400 w-11/12 text-lg ">
          Hi there, originating from London and now settled in France, I am a
          20-year-old student in full-stack development who builds for the web
          with a design-oriented approach.
        </p>
      </section>
    </>
  );
}
