export default function Header() {
  return (
    <>
      <nav className="h-20  mt-6 relative">
        <ul className="flex  text-sm text-neutral-400 xl:ml-40 font-medium">
          <a href="/#about">
            <li className="xl:mr-6 mr-1 p-2 sm:px-4  hover:text-neutral-200 hover:bg-neutral-900 transition-colors rounded-md  ">
              About
            </li>
          </a>
          <a href="/#projects">
            <li className="xl:mr-6 mr-1 p-2 sm:px-4 hover:text-neutral-200 hover:bg-neutral-900  transition-colors rounded-md ">
              Projects
            </li>
          </a>
          <a href="/#skills">
            <li className="xl:mr-6 mr-1 p-2 sm:px-4 hover:text-neutral-200 hover:bg-neutral-900 transition-colors rounded-md ">
              Skills
            </li>
          </a>
          <a href="/#contact">
            <li className="xl:mr-6 mr-1 p-2 sm:px-4 hover:text-neutral-200 hover:bg-neutral-900 transition-colors rounded-md ">
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
