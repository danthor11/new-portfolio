import Project from "./Project";
import data from "../data/projects/projects.json";
import type ProjectsProps from "../types/projects.ts";
const Projects = () => {
  return (
    <section className=" bg-slate-600 py-8 min-h-screen" id="projects">
      <h1 className=" text-3xl font-bold text-slate-50 text-center py-4 mb-8 uppercase ">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 p-8 mx-auto max-w-5xl mb-6">
        {data.data.map((project: ProjectsProps) => (
          <Project {...project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

// flex flex-wrap gap-6 justify-evenly items-center
export default Projects;
