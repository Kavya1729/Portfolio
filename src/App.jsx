import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowCaseSection />
      <FeatureCards/>
      <ExperienceSection />
    </>
  );
}

export default App
