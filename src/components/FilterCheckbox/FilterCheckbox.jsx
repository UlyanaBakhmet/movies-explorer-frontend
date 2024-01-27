import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ checked, onChange }) {
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="filter-checkbox__switch"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}
