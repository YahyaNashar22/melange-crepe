import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Cooking from "./components/Cooking/Cooking";
import Freshly from "./components/Freshly/Freshly";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Banner />
        <Cooking />
        <Menu />
        <Freshly />
      </main>
    </>
  );
};

export default App;
