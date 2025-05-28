import AboutSection from "../components/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";
import HomeSection from "../components/HomeSection/HomeSection";
import ProjectSection from "../components/ProjectsSection/ProjectsSection";

const Home = () => {
  return (
    <>
      {/* Home Section - Intro block of the portfolio */}
      <HomeSection />

      {/* About Section - Bio, skills, etc. */}
      <AboutSection />

      {/* Projects Section - Show your work here */}
      <ProjectSection />

      {/* Contact Section - Email and social links */}
      <ContactSection />
    </>
  );
};

export default Home;
