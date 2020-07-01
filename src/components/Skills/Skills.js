import React from "react";
import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
  const Skill = (props) => (
    <div className="Skill">
      <h3>{props.name}</h3>
      <div style={{ width: props.level }}>{props.level}</div>
    </div>
  );

  return (
    <div className="Skills" id="Skills">
      <h1>Skills</h1>
      <div className="skill-list">{skills.map((skill) => Skill(skill))}</div>
    </div>
  );
}

export default Skills;
