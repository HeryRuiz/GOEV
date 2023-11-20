import React from "react";
import "../styles/CarVideo.css";
import Video from "../assets/video1.mp4";

function CarVideo() {
  return (
    <section className="video">
      <div className="video__content">
        <div className="car__video">
          <video className="background" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="video__des">
            <h2 className="video__title">2024 GOEV Model 1</h2>
            <p className="video__medium">Starting MSRP $29,999*</p>
            <p className="video__small">
              GOEV Model 1 shown in Light Blue. Vehicle shown with options using
              visual effects. Limited availability.
            </p>
          </div>
          <button className="video__button">Purchase</button>
        </div>
      </div>
    </section>
  );
}

export default CarVideo;
