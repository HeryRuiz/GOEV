import Footer from "../Layout/Footer";
import "./styles/Explore.css";
import { Link } from "react-router-dom";
function Explore() {
  return (
    <section className="explore">
      <div className="explore__content">
        <div className="explore__text">
          <p className="explore__text--title">GOEV Model 1</p>
          <p className="explore__text--des"> Starting MSRP $29,999</p>
        </div>
        <Link to="/EV" className="explore__shopnew">
          Customize The GOEV
        </Link>
      </div>
      <Footer />
    </section>
  );
}

export default Explore;
