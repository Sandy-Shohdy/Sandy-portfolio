import { portfolioData } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero person={portfolioData.person} />
      <ProjectsSection projects={portfolioData.projects} />
      <SkillsSection
        technicalSkills={portfolioData.technicalSkills}
        softSkills={portfolioData.softSkills}
      />
      <Contact portfolioData={portfolioData} />
      <ScrollToTop />
    </>
  );
}

export default App;
