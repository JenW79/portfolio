// File: src/App.jsx


import Hero from './components/Hero';
import Projects from './components/ProjectHighlight';
import Experience from './components/VideoShowCase';
import Contact from './components/Portfolio';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return (
    <>
      <Hero />
      <About />
      <ProjectHighlight />
      <Footer />
    </>
  );
}

export default App;