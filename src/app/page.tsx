import Header from "./componenets/header";
import About from "./sections/about";
import { GeistSans } from "geist/font/sans";

export default function Page() {
  return (
    <>
      <body className="px-96 bg-gradient-to-tr from-slate-950 to-slate-900">
        <Header />
        <main className={GeistSans.className}>
          <About />
          {/* <div>Projects</div>
          <div>Tech Stack</div>
          <div>Contact</div> */}
        </main>
      </body>
    </>
  );
}
