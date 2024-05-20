import Header from "./componenets/header";
import About from "./sections/about";
import Projects from "./sections/projects";
import { GeistSans } from "geist/font/sans";

// bg-gradient-to-tr from-neutral-900 to-neutral-950

export default function Page() {
  return (
    <>
      <body className="w-6/12 pl-10 mx-auto bg-neutral-950">
        <main className={GeistSans.className}>
          <Header />
          <About />
          <Projects />
          {/* <div>Projects</div>
          <div>Tech Stack</div>
          <div>Contact</div> */}
        </main>
      </body>
    </>
  );
}
