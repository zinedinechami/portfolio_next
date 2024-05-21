export default function Skills() {
  return (
    <>
      <section className="pb-32">
        <h1 className="text-2xl font-bold">My Favorite Technologies</h1>
        <h2 className="text-neutral-400 pb-10">
          The things i use to build fast and good applications
        </h2>
        <div className="flex mx-auto ">
          <ul className="mr-14">
            <li className="text-xl font-medium pb-2">Front-End</li>

            <div className="text-neutral-400">
              <li>TypeScript</li>
              <li>React</li>
            </div>
          </ul>
          <ul className="mr-14">
            <li className="text-xl font-medium pb-2">Back-End</li>
            <div className="text-neutral-400">
              <li>Next.JS</li>
              <li>PostgresSQL</li>
            </div>
          </ul>
          <ul className="mr-14">
            <li className="text-xl font-medium pb-2">Design</li>
            <div className="text-neutral-400">
              <li>TailwindCSS</li>
              <li>Figma</li>
            </div>
          </ul>
          <ul className="mr-14">
            <li className="text-xl font-medium pb-2">Tools</li>
            <div className="text-neutral-400">
              <li>Git & Github</li>
              <li>VS Code</li>
              <li>Vercel</li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}
