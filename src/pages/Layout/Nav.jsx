import "./styles/Nav.css";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
function Nav() {

  function burgerOnOrOff(val) {
    if(val === false){
        document.querySelector('.burger__container').style.display = 'none'
    }else{
      document.querySelector('.burger__container').style.display = 'block'
    }
  }

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
              <Link to="/">Home</Link>
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
          <IconMenu2 onClick={()=>burgerOnOrOff(true)} className="hamburger-menu" />
        </div>
      </nav>
      <Burger burgerOnOrOff={burgerOnOrOff} toSection={toSection}/>
    </>
  );
}

export default Nav;
