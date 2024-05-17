import About from "./sections/about";

export default function Page() {
  return (
    <>
      <body className="">
        <div>Header</div>
        <main>
          <About />
          <div>Projects</div>
          <div>Tech Stack</div>
          <div>Contact</div>
        </main>
      </body>
    </>
  );
}
