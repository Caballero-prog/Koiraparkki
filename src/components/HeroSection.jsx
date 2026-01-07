import "../styles/HeroSection.css";
import heroBg from "../assets/basenji.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <header className="hero" style={{backgroundImage: `url(${heroBg})`}}>
      <nav className="navigation-bar">
        <button className="burger-menu" type="button" aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <span className="hero-title">Koiraparkki</span>
        <div className="nav-spacer" aria-hidden="true" />
      </nav>
    </header>
  );
};

export default HeroSection;
