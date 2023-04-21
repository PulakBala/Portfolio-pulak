
import './App.css';
import About from './Components/About';
import Bot from './Components/Bot';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Bot/>
     <Hero/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
