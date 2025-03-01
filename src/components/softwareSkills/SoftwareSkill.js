import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <img src={skill.badgeURL} alt={skill.skillName} className="badge-icon" />
          ))}
        </ul>
      </div>
    </div>
  );
}
