import "./styles/Details.css";
import { Search, ArrowsExchange, Location } from "tabler-icons-react";
import { Link } from "react-router-dom";
function Details() {
  return (
    <section className="details">
      <div className="details__content">
        <div>
          <p className="details__title">CURRENT OFFER</p>
          <Link to="/EV" className="details__links">
            View all GOEV offers
          </Link>
        </div>
        <div className="details__offer">
          <p>2024</p>
          <p>
            THE BEST SALES EVENT <br />
            <span className="detail__offer--text">GOEV MODEL 1</span>
          </p>
          <p>
            <span className="detail__offer--text">2.9% APR*</span> <br />
            36 months for well-qualified buyers
          </p>
          <p className="detail__offer--plus">— PLUS —</p>
          <p>
            <span className="detail__offer--text">$2,000*</span> <br />
            Purchase allowance
          </p>
          <p>WHEN YOU FINANCE THROUGH GOEV FINANCIAL</p>
          <Link to="/EV" className="details__links">
            VIEW OFFERS
          </Link>
        </div>
        <div className="details__Buttons">
          <Link to="/EV" className="details__box">
            <ArrowsExchange size={48} strokeWidth={2} color={"white"} />
            <p>SELF DRIVING</p>
          </Link>

          <Link to="/EV" className="details__box">
            <Location size={48} strokeWidth={2} color={"white"} />
            <p>FIND A DEALER</p>
          </Link>

          <Link to="/EV" className="details__box">
            <Search size={48} strokeWidth={2} color={"white"} />
            <p>INVENTORY</p>
          </Link>

          <Link to="/EV" className="details__box">
            <img
              src="https://cdn.discordapp.com/attachments/1187219037537714220/1201509058767769681/Tesla.png?ex=65ca1382&is=65b79e82&hm=1a53220470a04affabf6d6fdbdf3ab88891a6965a60573a3a0d27f157781136f&"
              alt="Tesla Logo"
            />
            <p>SUPER CHARGE</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Details;
