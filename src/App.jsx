import { ThemeProvider } from './context/ThemeContext';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Dock from './components/Dock';
import LightRays from './components/LightRays';
import VerticalScrollbar from './components/VerticalScrollbar';
import { Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  const dockItems = [
    { 
      icon: <Github size={20} />, 
      label: 'GitHub', 
      onClick: () => window.open('https://github.com/tanoop01', '_blank')
    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://linkedin.com/in/anooptripathi428', '_blank')
    },
    { 
      icon: <Twitter size={20} />, 
      label: 'Twitter', 
      onClick: () => window.open('https://twitter.com/@tanoop428', '_blank')
    },
  ];

  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300 bg-black">
        {/* Light Rays Effect */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <VerticalScrollbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Dock 
            items={dockItems}
            panelHeight={56}
            baseItemSize={40}
            magnification={56}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
