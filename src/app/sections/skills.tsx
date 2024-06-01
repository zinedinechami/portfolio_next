export default function Skills() {
  return (
    <>
      <section id="skills" className="pb-36">
        <h1 className="text-2xl font-bold text-neutral-200 pb-1">
          My Favorite Tech
        </h1>
        <h2 className="text-neutral-400 pb-10">
          The tech i use to build fast and performant applications, from
          scratch.
        </h2>
        <div className="flex sm:flex-row flex-wrap w-full mx-auto justify-between	 ">
          <ul className="mr-14">
            <li className="text-xl font-medium pb-3 lg:pt-0 pt-6">Front-End</li>

            <div className="text-neutral-400">
              <li className="flex pb-1">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 ml-1 mr-2 text-neutral-200"
                >
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
                TypeScript
              </li>
              <li className="flex">
                <svg
                  viewBox="0 0 34 32"
                  fill="currentColor"
                  className="w-6 mr-2 text-neutral-200"
                >
                  <path
                    fill="currentColor"
                    d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
                  />
                  <path
                    fill="currentColor"
                    d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
                  />
                </svg>
                React
              </li>
            </div>
          </ul>
          <ul className="mr-14">
            <li className="text-xl font-medium pb-3 lg:pt-0 pt-6">Back-End</li>
            <div className="text-neutral-400">
              <li className="flex pb-1">
                <svg
                  fill="none"
                  viewBox="0 0 15 15"
                  className="w-4 mr-2 text-neutral-200"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Next.JS
              </li>
              <li className="flex">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 mr-2 text-neutral-200"
                >
                  <path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 00.26-3.74.86.86 0 00-.66-.74 3.12 3.12 0 00-2.08.61v.18a11.34 11.34 0 01-.06 2.41 2.37 2.37 0 00.62 2 2 2 0 001.43.63 8.05 8.05 0 01.3-.81zM10 8.58a.36.36 0 01-.09-.23.19.19 0 01.09-.12.74.74 0 01.48-.07c.25 0 .5.16.48.34a.51.51 0 01-.49.33h-.06a.63.63 0 01-.41-.25z" />
                  <path d="M7.88 11a12.58 12.58 0 00.06-2.3v-.28a7 7 0 011.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 001 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 017.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 00-.29.35c-.35.43-.5.58-1.51.79a2 2 0 00-.4.11 1 1 0 00.37.16 2.21 2.21 0 002.5-.8.41.41 0 000-.35.59.59 0 00-.25-.37zm6.29-5.82a5.29 5.29 0 00.08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 01.26.48 1.79 1.79 0 00.15.31 3.72 3.72 0 00.16-2.13 7.51 7.51 0 01-.07-1.05 6 6 0 01.14-.93zm-.56-.16a.6.6 0 01-.32.17h-.06a.47.47 0 01-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 01-.12.26z" />
                  <path d="M17 4.88a6.06 6.06 0 011.37 2.57.71.71 0 010 .15 5.67 5.67 0 01-.09 1.06 7.11 7.11 0 00-.09.86 6.61 6.61 0 00.07 1 4 4 0 01-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 00-3.81-1.8 7.34 7.34 0 00-1.63.16A6.17 6.17 0 0117 4.88z" />
                  <path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 01-1 .13 19.74 19.74 0 002.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0016.37 2a8.44 8.44 0 00-2.46.35 9.38 9.38 0 00-1.45-.14 4.8 4.8 0 00-2.46.62 12.22 12.22 0 00-1.77-.44A5.44 5.44 0 004 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 001 4.67A15.76 15.76 0 004.4 15a3.39 3.39 0 001.75 1.83 1.71 1.71 0 001.69-.37 2 2 0 001 .59 3.65 3.65 0 002.35-.14v.81a8.46 8.46 0 00.31 2.36 1 1 0 010 .13 3 3 0 00.71 1.24 2.08 2.08 0 001.49.56 3 3 0 00.7-.08 3.27 3.27 0 002.21-1.27 7.34 7.34 0 00.91-4v-.26h.17a5.24 5.24 0 002.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 01-1.8.34 2.62 2.62 0 01-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 01-2.25 2.3 3.23 3.23 0 01-.66.07A2 2 0 0112 20a16.77 16.77 0 01-.28-4.06 2.56 2.56 0 01-1.78.66 3.94 3.94 0 01-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 01.19-.24 2.56 2.56 0 01-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 01-1.11.63 1.23 1.23 0 01-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 01-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 012.41-.66 5.58 5.58 0 011.4.18 7.51 7.51 0 012.5-.4 5.35 5.35 0 014.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 01-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z" />
                  <path d="M17.43 13.59a4 4 0 01-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 012.12-.61 6.28 6.28 0 00-1.13-1.94 5.41 5.41 0 00-4.13-2 3.34 3.34 0 00-2.55.95A5.82 5.82 0 008.51 7.8l.15-.08A3.7 3.7 0 0110 7.3a1.45 1.45 0 011.76 1.19 5.73 5.73 0 01-.29 4.09 3.29 3.29 0 00-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 01.57.07 1.16 1.16 0 01.62.74v.16a.28.28 0 010 .09 22.22 22.22 0 00.22 4.9 1.5 1.5 0 002 1.09A1.92 1.92 0 0016.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z" />
                  <path d="M18 14.33l-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 00.93.12 4.29 4.29 0 001.38-.29 3 3 0 00.79-.52 3.47 3.47 0 01-2.43-.05z" />
                </svg>
                PostgresSQL
              </li>
            </div>
          </ul>
          <ul className="mr-14">
            <li className="text-xl font-medium pb-3 lg:pt-0 pt-6">Design</li>
            <div className="text-neutral-400">
              <li className="flex pb-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 mr-2 text-neutral-200"
                >
                  <path d="M18.5 9.51a4.22 4.22 0 01-1.91-1.34A5.77 5.77 0 0012 6a4.72 4.72 0 00-5 4 3.23 3.23 0 013.5-1.49 4.32 4.32 0 011.91 1.35A5.77 5.77 0 0017 12a4.72 4.72 0 005-4 3.2 3.2 0 01-3.5 1.51zm-13 4.98a4.22 4.22 0 011.91 1.34A5.77 5.77 0 0012 18a4.72 4.72 0 005-4 3.23 3.23 0 01-3.5 1.49 4.32 4.32 0 01-1.91-1.35A5.8 5.8 0 007 12a4.72 4.72 0 00-5 4 3.2 3.2 0 013.5-1.51z" />
                </svg>
                TailwindCSS
              </li>
              <li className="flex">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 mr-2 text-neutral-200"
                >
                  <path d="M15.332 8.668a3.333 3.333 0 000-6.663H8.668a3.333 3.333 0 000 6.663 3.333 3.333 0 000 6.665 3.333 3.333 0 000 6.664A3.334 3.334 0 0012 18.664V8.668h3.332z" />
                  <path d="M18.664 12 A3.332 3.332 0 0 1 15.332 15.332 A3.332 3.332 0 0 1 12 12 A3.332 3.332 0 0 1 18.664 12 z" />
                </svg>
                Figma
              </li>
            </div>
          </ul>
          <ul className="mr-14">
            <li className="text-xl font-medium pb-3 lg:pt-0 pt-6">Tools</li>
            <div className="text-neutral-400">
              <li className="flex pb-1">
                {" "}
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-4 mr-2 text-neutral-200"
                >
                  <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
                </svg>
                Git & Github
              </li>
              <li className="flex">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="w-4 mr-2 text-neutral-200"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 3v18l4-2.5v-13zM9.165 13.903L5 17.5l-2-1L7.333 12m1.735-1.802L16 3v5l-4.795 4.141" />
                  <path d="M16 16.5L5 6.5l-2 1L16 21" />
                </svg>
                VS Code
              </li>
              <li className="flex">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-4 mr-2 text-neutral-200"
                >
                  <path fillRule="evenodd" d="M256 48l240 416H16z" />
                </svg>
                Vercel
              </li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

// todo: add colored logos to each skill
