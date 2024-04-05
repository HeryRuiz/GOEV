import React from "react";
import "./styles/Book.css";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
function Book() {
  return (
    <section className="book">
      <div className="book__content">
        <div className="book__carinfo">
          <h2>Model 1</h2>
          <p>Lease starting at $299/mo*</p>
        </div>
        <div className="book__buttons">
          <Link className="book__button">Order Now</Link>
          <Link className="book__button">Demo Drive</Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Book;
