import "../styles/Nav.css";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {
  const [mobile, setMobile] = useState(false);
  const openMobile = () => {
    setMobile(!mobile);
  };
  const toSection = (name) => {
    document.querySelector(`.${name}`).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="sticky-nav">
        <div className="navbar">
          <div className="navbar__logo">
            <Link to="/">GOEV</Link>
          </div>
          <ul className="navbar__menu">
            <li onClick={() => toSection("hero")}>
              <Link to="/" >Home</Link>
            </li>
            <li onClick={() => toSection("details")}>
              <Link to="/">Overview</Link>
            </li>
            <li>
              <Link to="/EV">Collection</Link>
            </li>
            <Link to="/EV" className="navbar__menu-build">
              Build
            </Link>
          </ul>
          <IconMenu2 onClick={openMobile} className="hamburger-menu" />
        </div>
      </nav>
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close-mobile" />
        <ul>
          <li onClick={openMobile}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={openMobile}>
          <Link to="/">Overview</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/EV">Collection</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
