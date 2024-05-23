import ProjectCard from "../componenets/project_card";

// todo: create map for projects

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-28">
        <h1 className="text-2xl font-bold text-neutral-200">My Projects</h1>
        <h2 className=" text-neutral-400">
          All my side projects that I built and designed.{" "}
        </h2>
        <a href="projects/asac">
          <ProjectCard />
        </a>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}
