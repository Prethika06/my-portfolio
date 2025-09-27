import React from "react";
import skills from "../data/skill";
import './Skills.css'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
