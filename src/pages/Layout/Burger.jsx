import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./styles/Burger.css";
function Burger({ burgerOnOrOff, toSection }) {
  return (
    <div className="burger__container">
      <div className="burger__top__container">
        <p>Discorver GOEV</p>
        <div>
          <IconX
            className="close-mobile"
            onClick={() => burgerOnOrOff(false)}
          />
        </div>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/EV"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          <p>Build a EV</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          <p>Explore</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/EV"
          onClick={() => burgerOnOrOff(false)}
        >
          <p>Support</p>
        </Link>
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          <p>Warranty</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          <p>Service</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          <p>Rewards</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/EV"
          onClick={() => burgerOnOrOff(false)}
        >
          <p>Book Demo</p>
        </Link>
      </div>
    </div>
  );
}
export default Burger;
