import Hero from "./components/Hero";
import ProjectHighlightModal from "./components/ProjectHighlightModal";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills"; 
import "./styles/App.css";

function App() {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
       <section id="featured">
        <ProjectHighlightModal />
      </section>
    </>
  );
}

export default App;