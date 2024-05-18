import Header from "./componenets/header";
import About from "./sections/about";
import Projects from "./sections/projects";
import { GeistSans } from "geist/font/sans";

export default function Page() {
  return (
    <>
      <body className="w-6/12 mx-auto bg-neutral-950">
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
