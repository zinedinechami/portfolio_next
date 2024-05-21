import ProjectCard from "../componenets/project_card";

export default function Projects() {
  return (
    <>
      <section className="pb-20">
        <h1 className="text-2xl font-bold text-neutral-200">My Projects</h1>
        <h2 className=" text-neutral-400">All my side projects are here </h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}
