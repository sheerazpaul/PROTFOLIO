import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
     
       <section id="home" className="scroll-mt-32 ">
        <Home />
      </section>
    
     
       <section id="about" className="scroll-mt-32 ">
        <About />
      </section>
     
    
       <section id="skill" className="scroll-mt-32 ">
        <Skills />
      </section>
          <section id="project" className="scroll-mt-32 ">
        <Projects />
      </section>
    
       <section id="Myexperience" className="scroll-mt-32 ">
        <Experience />
      </section>
         <section id="contact" className="scroll-mt-32  ">
        <Contact />
      </section>
    </div>
  );
}

export default App;
