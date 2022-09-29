import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { AboutMe } from "./components/about-me/about-me";
import { Skills } from "./components/skills/skills";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
