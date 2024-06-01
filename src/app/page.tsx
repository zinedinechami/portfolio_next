import Header from "./componenets/header";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import { GeistSans } from "geist/font/sans";

// bg-gradient-to-tr from-neutral-900 to-neutral-950

export default function Page() {
  return (
    <>
      <body className="lg:w-6/12 md:w-8/12 w-11/12 sm:pl-10 mx-auto bg-neutral-950">
        <main className={GeistSans.className}>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </body>
    </>
  );
}
