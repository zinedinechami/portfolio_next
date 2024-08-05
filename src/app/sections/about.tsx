export default function About() {
  return (
    <>
      <section id="about" className="sm:pt-28 pt-20 pb-28 xl:w-11/12 w-full">
        <div className="flex  ">
          <h1 className="text-3xl font-semibold  text-neutral-100 ">
            hey, i&apos;m Zinedine 👋🏻
          </h1>
        </div>
        <p className="text-neutral-300 text-md mt-2 ">
          I&apos;m a 20 y/o web developer & designer. Originating from London
          and currently living in France, I enjoy building for the web with a
          design-oriented approach.
        </p>
        <div className="mt-5 flex text-sm text-neutral-50">
          <a
            className=" mr-2 flex bg-neutral-200 py-3 px-7 text-neutral-900  rounded-full hover:bg-neutral-50 transition-colors "
            href="mailto:zinedine.chami@gmail.com"
          >
            Reach out
          </a>{" "}
          <a
            href="https://x.com/zinedinechami"
            className="flex hover:bg-neutral-900 transition-colors py-3 px-6 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-6 h-5 mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
            <p className=""> @zinedinechami</p>
          </a>
        </div>
      </section>
    </>
  );
}
