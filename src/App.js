
import './App.css';
import About from './Components/About';
import Bot from './Components/Bot';
import CompareImage from './Components/CompareImage';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Bot/>
     <CompareImage/>
     <Hero/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>
     <SocialLinks/>
    </div>
  );
}

export default App;
