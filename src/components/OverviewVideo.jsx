import React from "react";
import "../styles/OverviewVideo.css";
import Video from "../assets/video1.mp4";

function OverviewVideo() {
  return (
    <section className="overview">
      <div className="overview__content">
        <div className="overview__video">
          <video className="overview__background" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="overview__des">
            <h2 className="overview__title">2024 GOEV Model 1</h2>
            <p className="overview__medium">Starting MSRP $29,999*</p>
            <p className="overview__small">
              GOEV Model 1 shown in Light Blue. Vehicle shown with options using
              visual effects. Limited availability.
            </p>
          </div>
          <button className="overview__button">Purchase</button>
        </div>
      </div>
    </section>
  );
}

export default OverviewVideo;