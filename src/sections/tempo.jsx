import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const [activeProject, setActiveProject] = useState(null);

  const openProject = (id) => setActiveProject(id);
  const closeProject = () => setActiveProject(null);

  const selected = projects.find((project) => project.id === activeProject);

  useGSAP(() => {
    if (activeProject !== null) return;

    projectRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }, [activeProject]);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {activeProject === null && (
          <div className="showcaselayout">
            <div
              className="first-project-wrapper cursor-pointer"
              ref={(el) => (projectRefs.current[0] = el)}
              onClick={() => openProject(projects[0].id)}
            >
              <img src={projects[0].image} alt={projects[0].title} />
              <h2 className="text-2xl font-bold text-white mt-4">
                {projects[0].title}
              </h2>
              <p className="text-white-50 mt-2">{projects[0].tagline}</p>
              <p className="text-sm mt-2 opacity-70 text-white">
                Click to view details →
              </p>
            </div>

            <div className="project-list-wrapper">
              {projects.slice(1).map((project, index) => (
                <div
                  key={project.id}
                  className="project cursor-pointer"
                  ref={(el) => (projectRefs.current[index + 1] = el)}
                  onClick={() => openProject(project.id)}
                >
                  <img src={project.image} alt={project.title} />
                  <h2 className="mt-3">{project.title}</h2>
                  <p className="text-white-50 mt-1">{project.tagline}</p>
                  <p className="text-sm mt-1 opacity-70 text-white">
                    Click to view details →
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selected && (
          <div className="max-w-5xl mx-auto flex flex-col">
            <button
              onClick={closeProject}
              className="mb-6 text-xl font-bold text-white self-start cursor-pointer"
            >
              ← Back to projects
            </button>

            <ProjectDetail project={selected} />
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectDetail = ({ project }) => {
  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} className="w-full rounded-lg mb-6" />

      <h2 className="text-3xl font-semibold mb-3 text-white">{project.title}</h2>
      <p className="text-white-50 mb-6 text-lg">{project.description}</p>

      <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50 mb-6">
        {project.highlights.map((item) => (
          <li key={item} className="text-lg">
            {item}
          </li>
        ))}
      </ul>

      <p className="text-sm opacity-80 text-white mb-6">
        <strong>Tech Stack:</strong> {project.tech}
      </p>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex text-white underline underline-offset-4"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ShowCaseSection;
