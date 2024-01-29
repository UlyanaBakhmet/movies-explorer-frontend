import React from "react";
import "./InfoPopup.css";

export default function InfoPopup({ isOpen, onClose, image, title }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img className="popup__image" src={image} alt={title} />
        <p className="popup__text">{title}</p>
        <button className="popup__close" type="button" onClick={onClose} />
      </div>
    </div>
  );
}
