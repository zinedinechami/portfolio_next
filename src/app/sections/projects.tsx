import ProjectCard from "../componenets/project_card";

export default function Projects() {
  return (
    <>
      <section className="pb-20">
        <h1 className="text-2xl font-bold text-neutral-200">Projects</h1>
        <h2 className=" text-neutral-400">
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
