import { data } from "../data/skills/skills.json";
import type SkillProps from "../types/skills.ts";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="bg-slate-900 w-full py-6" id="skills">
      <h2 className="text-3xl font-bold text-slate-50 text-center py-4 mt-4 mb-6 uppercase">
        Skills
      </h2>

      <div className=" carrousel-container">
        <div
          className="grid p-10 grid-cols-2 lg:grid-cols-5
           place-content-center
            mx-auto 
           mb-6"
        >
          {data.map(({ label, url_image }: SkillProps) => (
            <Skill key={url_image} label={label} url_image={url_image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
