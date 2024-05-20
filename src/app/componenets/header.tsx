export default function Header() {
  return (
    <>
      <nav className="h-20  mt-10 ">
        <ul className="flex  text-sm text-neutral-400 ">
          <a href="">
            <li className="mr-4 p-2 hover:border hover:bg-neutral-900 border-neutral-800 hover:text-neutral-200 transition-colors rounded ">
              About
            </li>
          </a>
          <a href="">
            <li className="mr-4 p-2 hover:border hover:bg-neutral-900 border-neutral-800 hover:text-neutral-200 transition-colors rounded">
              Projects
            </li>
          </a>
          <a href="">
            <li className="mr-4 p-2 hover:border hover:bg-neutral-900 border-neutral-800 hover:text-neutral-200 transition-colors rounded ">
              Skills
            </li>
          </a>
          <a href="">
            <li className="mr-4 p-2 hover:border hover:bg-neutral-900 border-neutral-800 hover:text-neutral-200 transition-colors rounded">
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
