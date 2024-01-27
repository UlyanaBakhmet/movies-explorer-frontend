import React from "react";
import "./Preloader.css";

export default function Preloader({ isVisible }) {
  return (
    <div className={`${isVisible ? "preloader" : "preloader_hidden"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
}
