import React from "react";
import TitleHeader from "../components/TitleHeader";
import { skillGroups, techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Tech Stack" sub="🛠️ Technologies I Work With" />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative"
            >
              <div className="tech-card-animated-bg z-0" />
              <div className="tech-card-content relative z-10">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-board">
          {skillGroups.map((group) => (
            <article key={group.label} className="card skill-panel">
              <div className="skill-panel-head">
                <span>{group.index}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
