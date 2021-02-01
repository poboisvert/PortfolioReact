import React from "react";
import "./NavigationOptions.css";

export default function NavigationOptions({ Icon, title, color }) {
  return (
    <div className="navigationOption">
      <Icon style={{ color: color }} />
      <h4 style={{ color: color }}>{title}</h4>
    </div>
  );
}
