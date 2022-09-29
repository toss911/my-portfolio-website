import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { AboutMe } from "./components/about-me/about-me";
import { Skills } from "./components/skills/skills";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
