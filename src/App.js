

import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';
import ParticlesBackground from './Components/ParticlesBackground';
import Projects from './Components/Projects';

function App() {
  
  return (
    <div className="App">
     <ParticlesBackground/>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     <SocialLinks/>
    </div>
  );
}

export default App;
