import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { achievements, education, expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        x: 36,
        duration: 0.75,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: text,
          start: "top 86%",
          once: true,
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, i) => (
              <div
                key={i}
                className="expText flex items-start gap-10 max-w-5xl ml-auto"
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src="/images/experience.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>


                <div className="flex-1">
                  <h1 className="font-semibold text-3xl">{card.title}</h1>
                  <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                  <p className="text-[#839CB5] italic">Responsibilities</p>
                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                    {card.responsibilities.map((responsibility, index) => (
                      <li key={index} className="text-lg">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="highlight-block">
          <p className="highlight-kicker">Achievements</p>
          <div className="achieve-grid">
            {achievements.map((item) => (
              <article key={item.kicker} className="card achieve-card">
                <div>
                  <p className="achieve-kicker">{item.kicker}</p>
                  <p className="achieve-stat">{item.stat}</p>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="achieve-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="highlight-kicker education-kicker">Education</p>
          <div className="edu-row">
            {education.map((item) => (
              <article key={`${item.school}-${item.date}`} className="edu-item">
                <p className="edu-date">{item.date}</p>
                <h3>{item.school}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
