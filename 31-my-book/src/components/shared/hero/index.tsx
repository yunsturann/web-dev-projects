import { useRef } from "react";
import "./hero.scss";

interface HeroProps {
  title: string;
  desc: string;
}

const Hero = (props: HeroProps) => {
  const { title, desc } = props;

  // ** Refs
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="hero">
      {/* Texts */}
      <div className="container">
        <header>
          <h1>{title}</h1>
          <p>{desc}</p>

          <div className="search-book" onClick={handleFocusInput}>
            <img src="/search-icon.png" alt="search icon" />
            <input ref={inputRef} type="text" placeholder="Search Book" />
          </div>
        </header>
      </div>

      {/* Hero imgs */}
      <div className="images">
        <img src="/hero.png" id="hero-bg" alt="Hero background" />
        <img src="/person.png" id="hero-person" alt="Hero Person" />
      </div>
    </div>
  );
};

export default Hero;
