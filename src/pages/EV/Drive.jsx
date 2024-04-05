import React from "react";
import "./styles/Drive.css";
import { Link } from "react-router-dom";

function Drive() {
  return (
    <section className="drive">
      <div className="drive__content">
        <div className="drive__image">
          <div className="drive__des">
            <h2 className="drive__title">2024 GOEV Model 1</h2>
            <p className="drive__medium">Starting MSRP $29,999*</p>
            <p className="drive__small">
              GOEV Model 1 shown in Light Blue. Vehicle shown with options using
              visual effects. Limited availability.
            </p>
          </div>
          <Link className="drive__button">Purchase</Link>
        </div>
      </div>
      
    </section>
  );
}

export default Drive;
