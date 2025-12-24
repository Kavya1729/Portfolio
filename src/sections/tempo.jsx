import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  const [activeProject, setActiveProject] = useState(null);

  const openProject = (id) => setActiveProject(id);
  const closeProject = () => setActiveProject(null);

  // Scroll animation (only for gallery view)
  useGSAP(() => {
    if (activeProject !== null) return;

    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, [activeProject]);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* =======================
            GALLERY VIEW
        ======================== */}
        {activeProject === null && (
          <div className="showcaselayout">
            {/* PROJECT 1 */}
            <div
              className="first-project-wrapper cursor-pointer"
              ref={(el) => (projectRefs.current[0] = el)}
              onClick={() => openProject("p1")}
            >
              <img src="/images/project1.png" alt="Property Booking Platform" />
              <h2 className="text-2xl font-bold text-white mt-4">
                Property Booking Platform
              </h2>
              <p className="text-sm mt-2 opacity-70 text-white">
                Click to view details →
              </p>
            </div>

            {/* PROJECT 2 */}
            <div
              className="project cursor-pointer"
              ref={(el) => (projectRefs.current[1] = el)}
              onClick={() => openProject("p2")}
            >
              <img src="/images/proj2.png" alt="Chat App" />
              <h2 className="mt-3">Chatting Application</h2>
              <p className="text-sm mt-1 opacity-70 text-white">
                Click to view details →
              </p>
            </div>

            {/* PROJECT 3 */}
            <div
              className="project cursor-pointer"
              ref={(el) => (projectRefs.current[2] = el)}
              onClick={() => openProject("p3")}
            >
              <img src="/images/proj3.png" alt="Weather App" />
              <h2 className="mt-3">Weather Forecast App</h2>
              <p className="text-sm mt-1 opacity-70 text-white">
                Click to view details →
              </p>
            </div>
          </div>
        )}

        {/* =======================
            FOCUSED PROJECT VIEW
        ======================== */}
        {activeProject !== null && (
          <div className="max-w-5xl mx-auto flex flex-col">
            {/* BACK BUTTON */}
            <button
              onClick={closeProject}
              className="mb-6 text-xl font-bold text-white self-start cursor-pointer"
            >
              ← Back to projects
            </button>

            {/* PROJECT DETAILS */}
            {activeProject === "p1" && (
              <ProjectDetail
                image="/images/project1.png"
                title="Property Booking Platform"
                description="A scalable full-stack property booking system with authentication, listings, booking flow, and admin dashboard."
                tech="React, Node.js, Express, MongoDB, Tailwind CSS"
              />
            )}

            {activeProject === "p2" && (
              <ProjectDetail
                image="/images/proj2.png"
                title="Chatting Application"
                description="Real-time chat application with private & group chats, typing indicators, online presence, and message sync."
                tech="MERN, Socket.io, JWT, Redux"
              />
            )}

            {activeProject === "p3" && (
              <ProjectDetail
                image="/images/proj3.png"
                title="Weather Forecast Application"
                description="Live weather forecasting app with real-time API integration and location-based search."
                tech="React, OpenWeather API, Tailwind CSS"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectDetail = ({ image, title, description, tech }) => {
  return (
    <div className="project-detail text-center">
      <img src={image} alt={title} className="w-full rounded-lg mb-6" />

      <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>

      <p className="text-white-50 mb-4">{description}</p>

      <p className="text-sm opacity-80 text-white">
        <strong>Tech Stack:</strong> {tech}
      </p>
    </div>
  );
};

export default ShowCaseSection;
