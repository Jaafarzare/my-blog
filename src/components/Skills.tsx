import React from "react";
import SkillCircle from "./SkillCircle";

type Skill = {
  id: number;
  imageSrc: string;
  skillName: string;
  percentage: number;
};

export default function Skills() {
  const skills: Skill[] = [
    {
      id: 1,
      imageSrc: "/icons/css.png",
      skillName: "CSS",
      percentage: 70,
    },

    {
      id: 2,
      imageSrc: "/icons/html.png",
      skillName: "HTML",
      percentage: 80,
    },

    {
      id: 3,
      imageSrc: "/icons/next.png",
      skillName: "NEXT.JS",
      percentage: 60,
    },

    {
      id: 4,
      imageSrc: "/icons/ts.png",
      skillName: "TypeScript",
      percentage: 70,
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          <h3 className=" text-3xl md:text-5xl font-bold">مهارت های من</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          {skills.map((skill) => (
            <SkillCircle
              key={skill.id}
              imageSrc={skill.imageSrc}
              skillName={skill.skillName}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
