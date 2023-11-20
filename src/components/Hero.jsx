import "../styles/Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <header>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__text--title">Discover luxury and wealth.</h1>
            <p className="hero__text--des">Explore the latest inventory.</p>
            <Link to="/EV" className="hero__explore">
              Explore The Collection
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
