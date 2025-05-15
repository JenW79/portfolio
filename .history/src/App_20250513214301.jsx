// File: src/App.jsx


import Hero from './components/Hero';
import ProjectHighlight from './components/ProjectHighlight';
import VideoShowcase from './components/VideoShowCase';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return (
    <>
      <Hero />
      <Portfolio />
      <ProjectHighlight />
      <VideoShowcase />
      <Footer />
    </>
  );
}

export default App;