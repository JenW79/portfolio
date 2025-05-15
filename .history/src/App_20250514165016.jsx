// File: src/App.jsx

import Hero from "./components/Hero";
import ProjectHighlightModal from "./components/ProjectHighlightModal";
import VideoShowcase from "./components/VideoShowCase";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <section id="video">
        <VideoShowcase />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="featured">
        <ProjectHighlightModal />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
