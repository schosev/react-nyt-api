import React from "react";
import "./CardHead.css";

const CardHead = props => (
  <div className="card-header">
    {props.value}
    {props.children}
  </div>
);

export default CardHead;
