import Header from "./componenets/header";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import { GeistSans } from "geist/font/sans";

export default function Page() {
  return (
    <>
      <body className="xl:w-6/12 lg:w-9/12 w-11/12 sm:pl-10 mx-auto bg-neutral-950 ">
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
