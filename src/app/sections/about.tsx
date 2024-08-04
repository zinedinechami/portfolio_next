export default function About() {
  return (
    <>
      <section id="about" className="sm:pt-28 pt-20 pb-28 xl:w-11/12 w-full">
        <div className="flex  ">
          <h1 className="text-4xl   text-neutral-100 new_font">
            hi, i&apos;m Zinedine 👋🏻
          </h1>
        </div>
        <p className="text-neutral-300 text-md mt-1 ">
          I&apos;m a 20 y/o student in full-stack web development. Originating
          from London and currently living in France, I enjoy building for the
          web with a design-oriented approach.
        </p>
        <div className="mt-5 flex text-sm text-neutral-50">
          <a
            className=" mr-2 flex bg-neutral-200 py-3 px-7 text-neutral-900  rounded-full hover:bg-neutral-50 transition-colors "
            href="mailto:zinedine.chami@gmail.com"
          >
            Contact me
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/zinedinechami/"
            className="flex hover:bg-neutral-900 transition-colors py-3 px-6 rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 mr-2 "
            >
              <path
                d="M0.280029 19.949H4.48003V7.349H0.280029V19.949Z"
                fill="currentColor"
              ></path>
              <path
                d="M1.03845 4.4525C1.43205 4.72994 1.89865 4.88524 2.38 4.89901C3.03855 4.9065 3.67326 4.653 4.14547 4.19391C4.61768 3.73484 4.88894 3.1075 4.9 2.44901C4.8998 1.96746 4.7577 1.49666 4.49147 1.09541C4.22523 0.694165 3.84664 0.380275 3.40304 0.192961C2.95942 0.00564474 2.47044 -0.0467895 1.9972 0.0422089C1.52394 0.131207 1.08742 0.357692 0.74216 0.693364C0.396897 1.02903 0.158207 1.45901 0.0559163 1.92956C-0.0463751 2.4001 -0.007733 2.89037 0.167014 3.33908C0.341761 3.7878 0.644865 4.17507 1.03845 4.4525Z"
                fill="currentColor"
              ></path>
              <path
                d="M15.68 19.949H19.88L19.824 12.333C19.824 8.413 17.29 7.209 15.12 7.209C14.3748 7.18473 13.636 7.35222 12.9741 7.69541C12.3122 8.0386 11.7496 8.546 11.34 9.169V7.349H7.28003V19.949H11.48V13.411C11.4731 13.3458 11.4731 13.2801 11.48 13.215C11.4572 12.8949 11.4978 12.5735 11.5996 12.2692C11.7013 11.9649 11.8622 11.6837 12.0729 11.4417C12.2837 11.1997 12.5401 11.0018 12.8276 10.8592C13.1151 10.7167 13.4279 10.6323 13.748 10.611C14.84 10.611 15.68 11.325 15.68 13.313V19.949Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className=""> @zinedinechami</p>
          </a>
        </div>
      </section>
    </>
  );
}
