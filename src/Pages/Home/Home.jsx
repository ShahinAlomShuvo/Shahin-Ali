import About from "../About/About";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
