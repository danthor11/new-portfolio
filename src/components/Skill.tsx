import type SkillProps from "../types/skills.ts";

const Skill = (skills: SkillProps) => {
  return (
    <div className=" rounded-md hover:scale-110 transition-all  relative py-4">
      <div className="w-28 h-28 grid place-content-center mx-auto">
        <img src={skills.url_image} alt={skills.label} />
      </div>
      <h2 className="text-center text-xl text-slate-50 ">{skills.label}</h2>
    </div>
  );
};

export default Skill;
