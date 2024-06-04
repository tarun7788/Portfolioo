import './App.css';
import Navbar from './navbar/navbar';
import Contact from './contact/contact.js';
import About from './about/about.js';
import Education from './education/education.js';
import Project from './projects/project.js';
import Skills from './skills/skills.js';
import Footer from './footer/footer.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Education/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
