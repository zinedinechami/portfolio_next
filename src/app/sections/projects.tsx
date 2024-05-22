import ProjectCard from "../componenets/project_card";

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-28">
        <h1 className="text-2xl font-bold text-neutral-200">My Projects</h1>
        <h2 className=" text-neutral-400">
          All my side projects that I built and designed.{" "}
        </h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}
