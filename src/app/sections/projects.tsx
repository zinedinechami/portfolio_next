import ProjectCard from "../componenets/project_card";

export default function Projects() {
  return (
    <>
      <section className="pb-96">
        <h1 className="text-2xl font-bold text-neutral-200">Projects</h1>
        <h2 className="pb-4 text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}
