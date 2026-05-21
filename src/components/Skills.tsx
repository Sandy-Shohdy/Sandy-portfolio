import type { TechnicalSkill, SoftSkill } from "../types";
import DecorativeBackground from "./Decorativebackground";

import "./Skills.css";

interface SkillsProps {
  technicalSkills: TechnicalSkill[];
  softSkills: SoftSkill[];
}

export default function SkillsSection({
  technicalSkills,
  softSkills,
}: SkillsProps) {
  return (
    <section className="skills-section" id="skills">
      <DecorativeBackground variant="default" />
      <div className="skills-container">
        <h2>Skills & Expertise</h2>

        {/* Technical Skills */}
        <div className="skills-content">
          <div className="skills-group">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="skills-categories">
              {technicalSkills.map((skillGroup) => (
                <div key={skillGroup.category} className="skill-category">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-group">
            <h3 className="skills-category-title">Soft Skills</h3>
            <div className="soft-skills">
              {softSkills.map((softSkill) => (
                <span key={softSkill.skill} className="soft-skill-tag">
                  {softSkill.skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
