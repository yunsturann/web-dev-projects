import "./app.scss";

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Parallax from "./components/parallax";
import Services from "./components/services";

const App = () => {
  return (
    <div className="app">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section>Parallax</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
