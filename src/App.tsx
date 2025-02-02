import "./App.css";
import Freshly from "./components/Freshly/Freshly";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <Freshly />
        <Menu />
      </main>
    </>
  );
};

export default App;
