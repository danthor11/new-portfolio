import React from "react";
import type ProjectsProps from "../types/projects.ts";

const Project = (project: ProjectsProps) => {
  return (
    <div
      className="flex flex-col mx-auto bg-slate-400 text-gray-900 pb-4 max-w-xs shadow-sm shadow-slate-600 border-none rounded-md  transition-all 
      hover:shadow-lg hover:scale-105  hover:bg-slate-500 [&>div>h3]:hover:text-gray-300"
      key={project.name}
    >
      <div className="relative">
        <img
          src={project.url_image}
          alt={project.name}
          className="h-full w-auto bg-slate-50 rounded-t-md object-cover"
        />
      </div>
      <div className="px-6">
        <h3 className="text-center text-3xl my-3 font-light ">
          {project.name}
        </h3>

        <a
          href={project.repository}
          target="_blank"
          rel="noopener noferrer"
          className="repository-link my-4"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            alt="github-icon"
          />
        </a>

        <div className="font-semibold  flex flex-wrap gap-2 my-2 items-center justify-center">
          {project.technologies.map((tech) => (
            <>
              <span
                className={` text-xs ${tech.color} p-1 rounded-md `}
                style={{
                  backgroundColor: tech.color,
                  boxShadow: `
                    box-shadow: 0px 0px 16px -3px  ${tech.color}
                   
                `,
                }}
              >
                {" "}
                {tech.name}
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
