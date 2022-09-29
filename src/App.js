import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { AboutMe } from "./components/about-me/about-me";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
