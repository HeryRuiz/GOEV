import React from "react";
import "../styles/CarMain.css";

function CarMain() {
  return (
    <section className="main">
      <div className="main__content">
        <div className="main__carinfo">
          <h2>Model 1</h2>
          <p>Lease starting at $299/mo*</p>
        </div>
        <div className="main__buttons">
          <button className="main__button">Order Now</button>
          <button className="main__button">Demo Drive</button>
        </div>
      </div>
    </section>
  );
}

export default CarMain;
