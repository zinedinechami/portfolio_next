import About from "./sections/about";
import Projects from "./sections/projects";

import { GeistSans } from "geist/font/sans";

export default function Page() {
  return (
    <>
      <body className="xl:w-6/12 lg:w-9/12 w-11/12 sm:pl-10 mx-auto bg-neutral-950 ">
        <main className={GeistSans.className}>
          <About />
          <Projects />
          <div className="mb-10 mt-16 text-sm text-neutral-300 hover:text-neutral-200 transition-colors">
            <a
              href="https://github.com/zinedinechami/portfolio_next"
              className="underline "
            >
              Portfolio built in NextJS, React & Tailwind
            </a>
          </div>
        </main>
      </body>
    </>
  );
}
