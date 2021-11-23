// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Learn from './components/homeLearn';
import Home from './components/home';
import About from './components/about';
import Projects, { Projects2, Projects3 } from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Projects2 />
      <Projects3 />
      <Contact />
      <Learn />
    </div>

  );
}

export default App;
