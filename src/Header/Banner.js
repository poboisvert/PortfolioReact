import React from "react";
import "./Banner.css";
import UncontrolledLottie from "../components/UncontrolledLottie";

export default function Banner() {
  return (
    <div className="banner">
      <UncontrolledLottie />
      <div className="banner__container">
        <p>
          Welcome to my portfolio! I'm PO a Python and REACT JS developer based
          in Montreal, Canada. I shape digital products and create reporting
          tools for business owners.
        </p>
        <span>
          This postfolio use REACT JS (Material UI and styled-components) mixed
          with a REST API
        </span>
      </div>
    </div>
  );
}
