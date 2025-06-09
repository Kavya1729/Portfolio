import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowCaseSection />
      <FeatureCards/>
      <ExperienceSection />
      <TechStack />
      <Contact/>
      <Footer />
    </>
  );
}

export default App
