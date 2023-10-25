import React from "react";
import "./Loading.css";
import logo from '../../assets/logo.png'

function Loading() {
  return (
    <>
    <img className="loading-logo" src={logo} />
    <div className="loading-container">
      <div className="loading-slider"></div>
    </div>
    </>
  );
}

export default Loading;
