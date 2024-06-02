export default function Header() {
  return (
    <>
      <nav className="h-20  mt-7 relative">
        <ul className="flex  text-sm text-neutral-400 xl:ml-40 font-medium">
          <a href="/#about">
            <li className="xl:mr-8 mr-4 p-2  hover:text-neutral-200 hover:bg-neutral-900 transition-colors rounded  ">
              About
            </li>
          </a>
          <a href="/#projects">
            <li className="xl:mr-8 mr-4 p-2  hover:text-neutral-200 hover:bg-neutral-900  transition-colors rounded ">
              Projects
            </li>
          </a>
          <a href="/#skills">
            <li className="xl:mr-8 mr-4 p-2  hover:text-neutral-200 hover:bg-neutral-900 transition-colors rounded ">
              Skills
            </li>
          </a>
          <a href="/#contact">
            <li className="xl:mr-8 mr-4 p-2  hover:text-neutral-200 hover:bg-neutral-900 transition-colors rounded ">
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
