import React from "react";
import "./NavigationOptions.css";

export default function NavigationOptions({ Icon, title, color, link }) {
  return (
    <div className="navigationOption">
      <Icon style={{ color: color }} />

      <h4 style={{ color: color }}>
        <a href={link}>{title}</a>
      </h4>
    </div>
  );
}
