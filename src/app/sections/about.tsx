export default function About() {
  return (
    <>
      <section id="about" className="pt-24 pb-20 sm:w-11/12 ">
        <div className="flex pb-3 ">
          <h1 className="text-3xl mb-1 font-semibold text-neutral-200 ">
            hey, i&apos;m Zinedine 👋🏻
          </h1>
        </div>
        <p className="text-neutral-400 text-md  ">
          I&apos;m a 20 y/o student in full-stack web development. Originating
          from London and currently living in France, I enjoy building for the
          web with a design-oriented approach. If i&apos;m not coding, I am
          probably watching a movie or working out :)
        </p>
        <div className="pt-6 flex text-sm">
          <a href="mailto:zinedine.chami@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 mr-7 hover:text-neutral-400 transition-colors"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </a>
          <a href="https://github.com/zinedinechami">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-7 w-6 hover:text-neutral-400 transition-colors"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/zinedinechami/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mr-7 hover:text-neutral-400 transition-colors"
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
          </a>
          <a href="https://x.com/zinedinechami">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="mr-4 hover:text-neutral-400 transition-colors"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
