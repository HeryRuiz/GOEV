import React from "react";
import "../styles/OverviewVideo.css";
import Video from "../assets/video1.mp4";
import { Link } from "react-router-dom";

function OverviewVideo() {
  return (
    <section className="overview">
      <div className="overview__content">
        <div className="overview__video">
          <video className="overview__background" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="overview__des">
            <h2 className="overview__title">GOEV Model 1</h2>
            <p className="overview__medium">
              EVERYONE DRIVES BUT NOT EVERYONE IS A DRIVER.
            </p>
          </div>
          <button className="overview__button">
            <Link to="/EV">Build</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OverviewVideo;
