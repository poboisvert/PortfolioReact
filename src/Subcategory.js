import React from "react";
import "./Subcategory.css";
export default function Subcategory(props) {
  return (
    <div className="subcategory">
      <props.icon /> <p>{props.title}</p>
    </div>
  );
}
