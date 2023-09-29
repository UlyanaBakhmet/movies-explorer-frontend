import React from "react";
import "./PortfolioItems.css";

export default function PortfolioItems({ url, title }) {
  return (
    <li className="portfolio__items">
      <a href={url} target="_blank" rel="noreferrer">
        <h2 className="portfolio__items-title">{title}</h2>
        <p className="portfolio__items-arrow">↗</p>
      </a>
    </li>
  );
}
