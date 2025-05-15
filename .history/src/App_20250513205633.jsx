// File: src/App.jsx


import Hero from './components/Hero';
import Projects from './components/ProjectHighlights';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;