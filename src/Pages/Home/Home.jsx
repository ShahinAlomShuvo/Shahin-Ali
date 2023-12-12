import About from "../About/About";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
};

export default Home;
