// File: src/App.jsx


import Hero from './components/Hero';
import Projects from './components/ProjectHighlight';
import VideoShowCase from './components/VideoShowCase';
import Contact from './components/Portfolio';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return (
    <>
      <Hero />
      <Portfolio />
      <ProjectHighlight />
      <Footer />
    </>
  );
}

export default App;